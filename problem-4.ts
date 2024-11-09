type Circle = {
    shape: 'circle';
    radius: number;
};
type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
};

const calculateShapeArea = (shape: Circle | Rectangle): number => {
    switch (shape.shape) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
    }
}
const circleArea = calculateShapeArea({ shape: 'circle', radius: 7 });
console.log(circleArea)
const rectangleArea = calculateShapeArea({ shape: 'rectangle', width: 4, height: 9 });
console.log(rectangleArea)