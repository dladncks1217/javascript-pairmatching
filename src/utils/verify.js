const { ERROR } = require('../constants/constants');

const verify = {
  inputTypeNumber(input) {
    // if (Number.isNaN(Number(input))) throw new Error(ERROR.EXAMPLE);
    if (Number.isNaN(Number(input))) throw new Error();
  },

  //
};

module.exports = verify;
