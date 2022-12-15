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
        if (input === '1') this.pairInput();
        if (input === '2') this.pairPrint();
        if (input === '3') this.pairClear();
        if (input.toUpperCase() === 'Q') this.quitGame();
      } catch (error) {
        OutputView.ErrorSelect();
        return this.getUserInputMenu();
      }
    });
  }

  // 페어 매칭 기능들
  pairInput() {
    OutputView.matchMenu();
    InputView.inputPairData((input) => {
      try {
        verify.pairData(input);
        const inputData = input.split(',');
        return this.pairMatching(inputData[0], inputData[2]);
      } catch (error) {
        OutputView.ErrorPairData();
        this.pairInput();
      }
    });
  }

  isMatched(type, mission) {
    if (type === WORDS.FRONTEND) {
      if (this.#frontend.pairMatching(mission)) return this.reMatchCheck(type, mission);
    }
    if (type === WORDS.BACKEND) {
      if (this.#backend.pairMatching(mission)) return this.reMatchCheck(type, mission);
    }
  }

  reMatchCheck(type, mission) {
    InputView.reMatchCheck((input) => {
      try {
        verify.rematchInput();
        if (input === WORDS.YES && type === WORDS.FRONTEND) this.#frontend.pairMatching(mission);
        if (input === WORDS.YES && type === WORDS.BACKEND) this.#backend.pairMatching(mission);
        if (input === WORDS.NO) return this.getUserInputMenu();
        return this.printPairMatchResult();
      } catch (error) {
        OutputView.ErrorRematchInput();
        return this.reMatchCheck();
      }
    });
  }

  printPairMatchResult() {}
  // 페어 조회 기능들
  pairPrint() {}

  // 페어 초기화 기능들
  pairClear() {}

  // 게임 종료 기능
  quitGame() {
    OutputView.gameQuit();
  }
}

const app = new App();
app.play();

module.exports = App;
