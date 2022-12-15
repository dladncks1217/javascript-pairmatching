const { ERROR } = require('../constants/constants.js');

const verify = {
  inputTypeNumberOrQ(input) {
    if (input.toUpperCase() !== 'Q' && Number.isNaN(Number(input))) throw new Error();
  },

  pairData(input) {
    const result = input.split(',');
    if (result.length !== 3) throw new Error();
  },
};

module.exports = verify;
