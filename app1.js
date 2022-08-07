let data = [];
data.push(1);
data.push(2);

for (let i = 2; i <= 100; i++) {
  data.push(data[i - 2] + data[i - 1]);
}

module.exports = data;

// let data = require("./app1.js");
