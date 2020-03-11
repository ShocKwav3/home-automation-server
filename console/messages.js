import consoleHelpers from './consoleHelpers';
import models from '../src/models';


const nodeVersion = consoleHelpers.colorize(consoleHelpers.colors.GREEN, `Node ${process.version} Located: ${process.title}`);
const user = consoleHelpers.colorize(consoleHelpers.colors.MAGENTA, process.env.USER);
const cwd = consoleHelpers.colorize(consoleHelpers.colors.YELLOW, process.cwd());
const printResultString = consoleHelpers.colorize(consoleHelpers.colors.RED, 'printResult(query)');
const exitString = consoleHelpers.colorize(consoleHelpers.colors.RED, '.exit');
const clearString = consoleHelpers.colorize(consoleHelpers.colors.BLUE, '.clear');
const dbCheckString = consoleHelpers.colorize(consoleHelpers.colors.YELLOW, '.checkDbConnection');
const dbConClosingString = consoleHelpers.colorize(consoleHelpers.colors.YELLOW, 'Closing DB Connection...');
const dbConErrorString = consoleHelpers.colorize(consoleHelpers.colors.RED, 'DB Connection Error');
const dbConOkString = consoleHelpers.colorize(consoleHelpers.colors.GREEN, 'DB Connection is OK');
const dbConVerifyString = consoleHelpers.colorize(consoleHelpers.colors.YELLOW, 'Verifying DB connection...');
const helpString = consoleHelpers.colorize(consoleHelpers.colors.YELLOW, '.help');

const sayWelcome = consoleHelpers.printOnConsole(`
  ---------------------------------------------------------
  |  Moro, ${user}!
  |
  |  You're running the REPL in
  |     => ${cwd}.
  |
  |  ${nodeVersion}
  |
  |  Type ${helpString} for commands.
  ----------------------------------------------------------
`);

const sayInstructions = consoleHelpers.printOnConsole(`
  ----------------------------------------------------------
  |  Type ${exitString} to terminate the session!
  |  Type ${clearString} to clear/reset the context!
  |  Type ${dbCheckString} to check the connection status with DB
  |
  |  Tip#1 Use ${printResultString} to print show result.
  ----------------------------------------------------------
`)

const sayModelList = () => {
  const modelNames = Object.keys(models)
  const modelList = consoleHelpers.constructList(modelNames);
  const modelListColorized = consoleHelpers.colorizeWords({words: modelNames, string: modelList, exclusions: ['sequelize', 'Sequelize']});

  return consoleHelpers.printOnConsole(
    `\nLoaded and available models\n ${modelListColorized}\n`
  )();
};

const sayBye = consoleHelpers.printOnConsole(`
  Moi Moi, ${user}!
`);

const sayDbConClosing = consoleHelpers.printOnConsole(`
  ${dbConClosingString}\n
`);

const sayDbConError = (error) => consoleHelpers.printOnConsole(`
  ${dbConErrorString}: ${error}\n
`)();

const sayDbConOk = consoleHelpers.printOnConsole(`
  ${dbConOkString}
`);

const sayDbConVerifying = consoleHelpers.printOnConsole(`
${dbConVerifyString}
`)


export default {
  sayWelcome,
  sayInstructions,
  sayBye,
  sayModelList,
  user,
  sayDbConClosing,
  sayDbConError,
  sayDbConOk,
  sayDbConVerifying,
};