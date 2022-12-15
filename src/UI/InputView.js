const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constants/constants');

const InputView = {
  userSelect(callback) {
    Console.readLine(MESSAGE.USER_SELECT + '\n', callback);
  },
};

module.exports = InputView;
