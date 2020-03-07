import messages from './messages';
import consoleHelpers from './consoleHelpers';


function defineWelcome(replServerInstance){
  replServerInstance.defineCommand('welcome', {
    help: "Prints the welcome message again",
    action() {
      this.clearBufferedCommand();
      messages.sayWelcome();
      this.displayPrompt();
    },
  });
};

function defineModelList(replServerInstance){
  replServerInstance.defineCommand('models', {
    help: "Prints all the available models",
    action() {
      this.clearBufferedCommand();
      messages.sayModelList();
      this.displayPrompt();
    },
  });
};

function defineDbConnectionCheck(replServerInstance){
  replServerInstance.defineCommand('checkDbConnection', {
    help: "Verifies DB connection",
    action() {
      this.clearBufferedCommand();
      consoleHelpers.checkDbConnection(this);
    },
  });
};

function defineInstruction(replServerInstance){
  replServerInstance.defineCommand('instructions', {
    help: "Prints instructions",
    action() {
      this.clearBufferedCommand();
      messages.sayInstructions();
      this.displayPrompt();
    },
  });
};


export default {
  defineWelcome,
  defineModelList,
  defineDbConnectionCheck,
  defineInstruction,
};