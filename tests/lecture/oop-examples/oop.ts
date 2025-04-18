import { Page } from "@playwright/test";

const car = {
  color: "red", // властивість
  size: "small",
  wheelsNumber: 4,
  price: 4000,
  sitsNumber: 2,
  isAutomat: true,
  speedLimit: 100,
  startEngine: () => {
    console.log("Врумммм!!!");
  }, // метод (поведінка)
  drive: () => {
    console.log("Машина їде!!!");
  },
  driveAtMaxSpeed: function () {
    console.log(`Я їду зі швидкістю ${this.speedLimit} км/год`);
  },
};

car.startEngine();
car.drive();
car.driveAtMaxSpeed();

function StudentForm(page: Page) {
  (this.page = page), (this.fieldLocator = this.page.locator(""));
  this.fieldLocator = this.page.locator("");
  this.fieldLocator = this.page.locator("");
  this.fieldLocator = this.page.locator("");
  this.fieldLocator = this.page.locator("");
}

class Car {
  color: string;
  size: string = "small";
  wheelsNumber: number = 4;
  price: number = 4000;
  sitsNumber: number = 2;
  isAutomat: boolean = true;
  speedLimit: number = 100;

  constructor(color: string) {
    this.color = color;
  }

  startEngine() {
    console.log("Врумммм!!!");
  }

  drive() {
    console.log("Машина їде!!!");
  }

  driveAtMaxSpeed() {
    console.log(`Я їду зі швидкістю ${this.speedLimit} км/год`);
  }
}

const yellowCar = new Car("yellow");
const yellowCar1 = new Car("black");
const yellowCar2 = new Car("red");
const yellowCar3 = new Car("orange");

console.log(yellowCar.color);
console.log(yellowCar1.color);
console.log(yellowCar2.color);
console.log(yellowCar3.color);
