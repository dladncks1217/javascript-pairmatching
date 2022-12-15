const BackEnd = require('./domain/Backend');
const FrontEnd = require('./domain/Frontend');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const verify = require('./utils/verify');

class App {
  #frontend;
  #backend;

  play() {
    return this.initData();
  }

  initData() {
    this.#frontend = new FrontEnd();
    this.#backend = new BackEnd();
  }

  showInputMenu() {
    OutputView.gameStart();
    return this.getUserInputMenu();
  }

  getUserInputMenu() {
    InputView.userSelect((input) => {
      try {
        verify.inputTypeNumberOrQ();
        if (input === '1') this.pairMatching();
        if (input === '2') this.pairPrint();
        if (input === '3') this.pairClear();
        if (input === 'Q') this.quitGame();
      } catch (error) {
        OutputView.ErrorSelect();
        return this.getUserInputMenu();
      }
    });
  }

  pairMatching() {}

  pairPrint() {}

  pairClear() {}

  quitGame() {
    OutputView.gameQuit();
  }
}

const app = new App();
app.play();

module.exports = App;
