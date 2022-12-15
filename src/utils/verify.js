const { ERROR, WORDS } = require('../constants/constants.js');

const verify = {
  inputTypeNumberOrQ(input) {
    if (input.toUpperCase() !== 'Q' && Number.isNaN(Number(input))) throw new Error();
  },

  pairData(input) {
    const result = input.split(',');
    if (result.length !== 3) throw new Error();
    if (result[0] !== WORDS.FRONTEND && result[0] !== WORDS.BACKEND) throw new Error();
  },

  rematchInput(input) {
    if (input === WORDS.YES || input === WORDS.NO) throw new Error();
  },
};

module.exports = verify;
