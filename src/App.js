const BackEnd = require('./domain/Backend');
const FrontEnd = require('./domain/Frontend');
const OutputView = require('./UI/OutputView');

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

  // gameSetting(){

  // }
}

const app = new App();
app.play();

module.exports = App;
