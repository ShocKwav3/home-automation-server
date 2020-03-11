import _ from 'lodash'

import messages from './messages';
import models from '../src/models';


const colors = {
  RED: "31",
  GREEN: "32",
  YELLOW: "33",
  BLUE: "34",
  MAGENTA: "35"
};

const colorize = (color, s) => `\x1b[${color}m${s}\x1b[0m`;

const printOnConsole = message => () => console.log(message);

const constructList = (arr) => arr.reduce((accumulator, item, index) => {
  if (index === 0) {
    accumulator = item;
  } else if (index === arr.length - 1) {
    accumulator = `${accumulator} and ${item}`;
  } else {
    accumulator = `${accumulator}, \n ${item}`;
  }

  return accumulator;
}, '');

const colorizeWords = ({words = [], string = '', color = colors.GREEN, exclusions = [], exclusionColor = colors.YELLOW}) => {
  let result = string;

  _.forEach(words, (word) => {
    let colorizedWord = colorize(color, word);
    if(exclusions.includes(word)){
      colorizedWord = colorize(exclusionColor, word)
    }
    const newStringWithColorizedWord = result.replace(word, colorizedWord);
    result = newStringWithColorizedWord;
  });

  return result;
}

const onExit = async () => {
  messages.sayDbConClosing();
  await models.sequelize.close();
  messages.sayBye();
};

const checkDbConnection = (self) => {
  messages.sayDbConVerifying();
  models.sequelize.authenticate()
                  .then(() => {
                    messages.sayDbConOk()
                    self.displayPrompt()
                  })
                  .catch(err => {
                    messages.sayDbConError(err);
                    self.displayPrompt()
                  });
};


export default {
  colors,
  colorize,
  printOnConsole,
  constructList,
  onExit,
  checkDbConnection,
  colorizeWords,
};