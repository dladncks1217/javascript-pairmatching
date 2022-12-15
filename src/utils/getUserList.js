const getUserList = (input) => {
  const result = require('fs').readFileSync(input).toString().trim().split(' ');
  return result.slice();
};

module.exports = getUserList;
