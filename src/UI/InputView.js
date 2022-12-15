const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, INPUT } = require('../constants/constants');

const InputView = {
  userSelect(callback) {
    Console.readLine(MESSAGE.USER_SELECT + '\n', callback);
  },

  inputPairData(callback) {
    Console.readLine(INPUT.PAIR_INPUT + '\n', callback);
  },
};

module.exports = InputView;
