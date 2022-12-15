const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR } = require('../constants/constants');

const OutputView = {
  gameStart() {
    Console.print(MESSAGE.GAME_START);
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
