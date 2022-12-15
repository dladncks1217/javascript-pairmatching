const { USER_LINK, WORDS } = require('./constants/constants');
const BackEnd = require('./domain/Backend');
const FrontEnd = require('./domain/Frontend');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const getUserList = require('./utils/getUserList');
const verify = require('./utils/verify');

class App {
  #frontend;
  #backend;

  play() {
    this.initData();
    return this.getUserInputMenu();
  }

  initData() {
    this.#frontend = new FrontEnd(getUserList, USER_LINK.FRONT);
    this.#backend = new BackEnd(getUserList, USER_LINK.BACK);
  }

  getUserInputMenu() {
    InputView.userSelect((input) => {
      try {
        verify.inputTypeNumberOrQ(input);
        if (input === '1') this.pairInput(input);
        if (input === '2') this.pairInput(input);
        if (input === '3') this.pairClear();
        if (input.toUpperCase() === 'Q') this.quitGame();
      } catch (error) {
        OutputView.ErrorSelect();
        return this.getUserInputMenu();
      }
    });
  }

  // 페어 매칭 기능들
  pairInput(number) {
    InputView.inputPairData((input) => {
      try {
        verify.pairData(input);
        const inputData = input.split(',').map((value) => value.trim());
        if (number === '1') return this.isMatched(inputData[0], inputData[2]);
        if (number === '2') return this.pairPrint(inputData[0], inputData[2]);
      } catch (error) {
        OutputView.ErrorPairData();
        this.pairInput();
      }
    });
  }

  isMatched(type, mission) {
    if (type === WORDS.FRONTEND) {
      if (!this.#frontend.hasData(mission)) return this.reMatchCheck(type, mission);
    }
    if (type === WORDS.BACKEND) {
      if (!this.#backend.hasData(mission)) return this.reMatchCheck(type, mission, '');
    }
    return this.pairMatch(type, mission);
  }

  pairMatch(type, mission) {
    let result;
    if (type === WORDS.FRONTEND) result = this.#frontend.pairMatching(mission);
    if (type === WORDS.BACKEND) result = this.#backend.pairMatching(mission);

    return this.printPairMatchResult(result);
  }

  reMatchCheck(type, mission, result) {
    InputView.reMatchCheck((input) => {
      try {
        verify.rematchInput(input);
        if (input === WORDS.YES && type === WORDS.FRONTEND) result = this.#frontend.pairMatching(mission);
        if (input === WORDS.YES && type === WORDS.BACKEND) result = this.#backend.pairMatching(mission);
        if (input === WORDS.NO) return this.getUserInputMenu();
        return this.printPairMatchResult(result);
      } catch (error) {
        OutputView.ErrorRematchInput();
        return this.reMatchCheck();
      }
    });
  }

  printPairMatchResult(data) {
    OutputView.pairMatchResult(data);
    return this.getUserInputMenu();
  }

  // 페어 조회 기능들
  pairPrint(type, mission) {
    let data;
    if (type === WORDS.FRONTEND) data = this.#frontend.printResult(mission);
    if (type === WORDS.BACKEND) data = this.#backend.printResult(mission);
    if (data !== 0) OutputView.pairMatchResult(data);
    if (data === 0) OutputView.pairMatchNoData();
    return this.getUserInputMenu();
  }

  // 페어 초기화 기능들
  pairClear() {
    this.#frontend = new FrontEnd(getUserList, USER_LINK.FRONT);
    this.#backend = new BackEnd(getUserList, USER_LINK.BACK);
    return this.getUserInputMenu();
  }

  // 게임 종료 기능
  quitGame() {
    OutputView.gameQuit();
  }
}

const app = new App();
app.play();

module.exports = App;
