const { Random } = require('@woowacourse/mission-utils');

const shuffleData = (data) => {
  const result = data.sort(() => Math.random() - 0.5);
  return result;
};

module.exports = shuffleData;
