const fs = require("fs");

// reading data books
const loadCars = () => {
	const fileBuffer = fs.readFileSync("data/cars.json", "utf-8");
	const cars = JSON.parse(fileBuffer);
	return cars;
};
module.exports = {
	loadCars
};