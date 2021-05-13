/* eslint-disable no-console, import/no-cycle */


import _ from 'lodash';
import Table from 'cli-table3';

import messages from './messages';
import models from '../src/models';


const colors = {
    RED: '31',
    GREEN: '32',
    YELLOW: '33',
    BLUE: '34',
    MAGENTA: '35',
};

const colorize = (color, s) => `\x1b[${color}m${s}\x1b[0m`;

const printOnConsole = (message) => () => console.log(message);

const constructList = (arr) => arr.reduce((accumulator, item, index) => {
    if (index === 0) {
        return item;
    }

    if (index === arr.length - 1) {
        return `${accumulator} and ${item}`;
    }

    return `${accumulator}, \n ${item}`;
}, '');

const colorizeWords = ({
    words = [], string = '',
    color = colors.GREEN,
    exclusions = [],
    exclusionColor = colors.YELLOW,
}) => {
    let result = string;

    _.forEach(words, (word) => {
        let colorizedWord = colorize(color, word);

        if (exclusions.includes(word)) {
            colorizedWord = colorize(exclusionColor, word);
        }


        result = result.replace(word, colorizedWord);
    });

    return result;
};

const onExit = async () => {
    messages.sayDbConClosing();
    await models.sequelize.close();
    messages.sayBye();
};

const checkDbConnection = (self) => {
    messages.sayDbConVerifying();

    models.sequelize.authenticate()
        .then(() => {
            messages.sayDbConOk();

            self.displayPrompt();
        }).catch((err) => {
            messages.sayDbConError(err);

            self.displayPrompt();
        });
};

const getTableInitialized = (headers) => {
    return new Table({
        head: headers,
        wordWrap: true,
    });
};

const printDbQueryResults = (arg, tabular = false) => {
    const data = arg.map((item) => {
        return item.toJSON();
    });

    if (!tabular || data.length < 1) {
        return data;
    }

    const headers = _.keys(data[0]);
    const tableView = getTableInitialized(headers);

    _.forEach(data, (item) => {
        tableView.push(_.values(item));
    });

    console.log(tableView.toString());

    return null;
};


export default {
    colors,
    colorize,
    printOnConsole,
    constructList,
    onExit,
    checkDbConnection,
    colorizeWords,
    printDbQueryResults,
};
