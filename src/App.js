const BackEnd = require('./domain/Backend');
const FrontEnd = require('./domain/Frontend');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const verify = require('./utils/verify');

class App {
  #frontend;
  #backend;

  play() {
    this.initData();
    return this.getUserInputMenu();
  }

  initData() {
    this.#frontend = new FrontEnd();
    this.#backend = new BackEnd();
  }

  getUserInputMenu() {
    InputView.userSelect((input) => {
      try {
        verify.inputTypeNumberOrQ(input);
        if (input === '1') this.pairMatching();
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
  pairMatching() {
    OutputView.matchMenu();
  }

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
