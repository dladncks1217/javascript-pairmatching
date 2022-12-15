const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR } = require('../constants/constants');

const OutputView = {
  userSelect() {
    Console.print(MESSAGE.USER_SELECT);
  },

  pairMatchResult(students) {
    students.sort((a, b) => a.length - b.length);
    let result = '';
    students.forEach((value) => {
      value = value.join(' : ');
      result += value + '\n';
    });
    Console.print(result);
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
