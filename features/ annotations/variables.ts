const apples: number = 5;
let speed: string = 'fast'
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//array
let colors: string[] = ['red', 'green', 'blue']
let numbers: number[] = [ 100, 83, 75]
let truths: boolean[] = [true, true, false]

//classes
class Car {

}

let car: Car = new Car();

//object literal
let point: { x: number; y: number; } = {
    x: 10,
    y: 20
}

//function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

//when to use annotations
// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(json);
console.log(coordinates)