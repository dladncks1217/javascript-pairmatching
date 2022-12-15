const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR } = require('../constants/constants');

const OutputView = {
  userSelect() {
    Console.print(MESSAGE.USER_SELECT);
  },

  matchMenu() {
    Console.print(MESSAGE.MATCH_MENU);
  },

  gameSetting() {},

  gameQuit() {
    Console.close();
  },

  ErrorSelect() {
    Console.print(ERROR.WRONG_SELECT);
  },
};

module.exports = OutputView;
