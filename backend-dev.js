const path = require('path');
const webpack = require('webpack');
const spawn = require('child_process').spawn;
const fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const compiler = webpack({
  entry: './bin/www',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle_server.js',
  },
  module: {
    rules: [
      {
        test: path.resolve(__dirname, 'bin/www'),
        use: 'shebang-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties']
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      projectRoot: path.resolve(__dirname),
    }
  },
  node: {
    __dirname: false,
  },
  externals: nodeModules,
  target: 'node',
  mode: 'development',
});

const watchConfig = {
  aggregateTimeout: 300,
  poll: 1000,
};

let serverControl;

compiler.watch(watchConfig, (err, stats) => {
  if (err) {
    console.error(err.stack || err);

    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    info.errors.forEach(message => console.log(message));
    return;
  }

  if (stats.hasWarnings()) {
    info.warnings.forEach(message => console.log(message));
  }

  if (serverControl) {
    serverControl.kill();
  }

  serverControl = spawn('node', [path.resolve(__dirname, 'dist/bundle_server.js')]);

  serverControl.stdout.on('data', data => console.log(data.toString()));
  serverControl.stderr.on('data', data => console.error(data.toString()));
});