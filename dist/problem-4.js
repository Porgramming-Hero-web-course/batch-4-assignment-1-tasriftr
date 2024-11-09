"use strict";
const calculateShapeArea = (shape) => {
    switch (shape.shape) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
    }
};
const circleArea = calculateShapeArea({ shape: 'circle', radius: 7 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({ shape: 'rectangle', width: 4, height: 9 });
console.log(rectangleArea);
