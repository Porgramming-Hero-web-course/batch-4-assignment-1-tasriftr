"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year;
        return age;
    }
}
const car = new Car('bugatti', 'Veyron', 1972);
console.log(car.getCarAge());
