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

  ErrorPairData() {
    Console.print(ERROR.WRONG_PAIR_DATA);
  },

  ErrorRematchInput() {
    Console.print(ERROR.REMATCH_INPUT);
  },
};

module.exports = OutputView;
