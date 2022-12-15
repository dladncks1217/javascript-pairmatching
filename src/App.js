const BackEnd = require('./domain/Backend');
const FrontEnd = require('./domain/Frontend');
const InputView = require('./UI/InputView');
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

  showInputMenu() {
    OutputView.gameStart();
    return this.getUserInputMenu();
  }

  // getUserInputMenu(){
  //   InputView.userSelect((input)=>{
  //     try{

  //     }catch(error){

  //     }
  //   })
  // }
}

const app = new App();
app.play();

module.exports = App;
