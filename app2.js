let data = require("./app1.js");
let newData = [];

for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 == 0) {
    newData.push(data[i]);
  }
}

module.exports = newData;
