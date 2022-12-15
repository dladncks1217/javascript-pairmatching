const { ERROR } = require('../constants/constants.js');

const verify = {
  inputTypeNumberOrQ(input) {
    if (input.toUpperCase() !== 'Q' && Number.isNaN(Number(input))) throw new Error();
  },
};

module.exports = verify;
