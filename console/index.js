import repl from 'repl';
import contextInitializers from './contextInitializers';
import customCommands from './customCommands';
import messages from './messages';
import consoleHelpers from './consoleHelpers';


global.printDbQueryResults = consoleHelpers.printDbQueryResults;

messages.sayWelcome();

const replServer = repl.start({
    prompt: `${messages.user}@App Console → `,
});

contextInitializers.initializeModels(replServer.context);

customCommands.defineWelcome(replServer);
customCommands.defineModelList(replServer);
customCommands.defineDbConnectionCheck(replServer);
customCommands.defineInstruction(replServer);

replServer.on('exit', consoleHelpers.onExit);
replServer.on('reset', contextInitializers.initializeModels);
