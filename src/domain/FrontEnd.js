class FrontEnd {
  #users;
  #lv1;
  #lv2;
  #lv3;
  #lv4;
  #lv5;
  constructor(getUsers, ref) {
    this.#lv1 = [0, 0, 0];
    this.#lv2 = [0, 0, 0];
    this.#lv4 = [0, 0];
    this.#users = getUsers(ref);
  }
}

module.exports = FrontEnd;
