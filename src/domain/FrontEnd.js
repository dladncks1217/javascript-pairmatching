const { LEVEL_DATA } = require('../constants/levelData');
const shuffleData = require('../utils/shuffleData');

class FrontEnd {
  #users;
  #allData;
  #lv1;
  #lv2;
  #lv3;
  #lv4;
  #lv5;

  constructor(getUsers, ref) {
    this.#lv1 = [0, 0, 0];
    this.#lv2 = [0, 0, 0];
    this.#lv4 = [0, 0];
    this.#allData = [0, this.#lv1, this.#lv2, this.#lv3, this.#lv4, this.#lv5];
    this.#users = getUsers(ref);
  }

  hasData(name) {
    if (this.#allData[LEVEL_DATA[name][0]][LEVEL_DATA[name][1]] === 0) return false;
    return true;
  }

  pairMatching(name, shuffle) {
    const students = [];
    let temp = [];
    const datas = shuffle(this.#users.slice());
    datas.forEach((value, index) => {
      temp.push(value);
      if (index !== 0 && index % 2 === 0) {
        students.push(temp.slice());
        temp = [];
      }
    });
    this.#allData[LEVEL_DATA[name][0]][LEVEL_DATA[name][1]] = students.slice();
    return students.slice();
  }

  printResult(name) {
    return this.#allData[LEVEL_DATA[name][0]][LEVEL_DATA[name][1]];
  }
}

module.exports = FrontEnd;
