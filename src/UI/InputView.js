const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants/constants');

const InputView = {
  inputExample(callback) {
    Console.readLine(MESSAGE.EXAMPLE + '\n', callback);
  },
};

module.exports = InputView;
