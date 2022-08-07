let newData = require("./app2.js");

let finalData = {};
let count = 0;

for (let i = 0; i < newData.length; i++) {
	if (newData[i] % 3 == 0) {
		finalData["key" + count] = newData[i];
		count++;
	}
}

console.log(finalData);
