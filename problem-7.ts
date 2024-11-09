class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;

    }
    getCarAge(): number {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year;
        return age;
    }
    
}

const car = new Car('bugatti', 'Veyron', 1972);
console.log(car.getCarAge());
