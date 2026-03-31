// // Complete the js code
// function Car(make, model) {
// 	this.make= make;
// 	this.model = model;
// };

// car.prototype.getMakeModel = function() {
// 	return `${this.make} ${this.model}`
// }

// function SportsCar(make, model, topSpeed) {
// 	this.car(this,make,model);
// 	this.topSpeed = topSpeed;
// }

// SportsCar.prototype=Object.create(Car.prototype);
// SportsCar.prototype.constructor = SportsCar;

// SportsCar.prototype.getTopSpeed = function () {
// 	return this.topSpeed;
// };

// Do not change the code below
//window.Car = Car;
//window.SportsCar = SportsCar;



// 1. Car Constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function() {
    return this.make + " " + this.model;
};

// 2. SportsCar Constructor
function SportsCar(make, model, topSpeed) {
    // Inherit properties from Car using .call()
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Link SportsCar prototype to Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Reset the constructor property (otherwise it points to Car)
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example Usage:
const myCar = new SportsCar("Ferrari", "488 GTB", 205);
console.log(myCar.getMakeModel()); // Output: Ferrari 488 GTB
console.log(myCar.getTopSpeed());  // Output: 205
