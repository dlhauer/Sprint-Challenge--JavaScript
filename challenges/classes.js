// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(dimensions) { 
    this.length = dimensions.length,
    this.width = dimensions.width,
    this.height = dimensions.height
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
  }
} 

const cuboidAttrs = {
  length: 4,
  width: 5,
  height: 5,
}

const cuboid = new CuboidMaker(cuboidAttrs);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(cubeAttrs) {
    super(cubeAttrs);
  }

  volume() {
    return this.length ** 3;
  }

  surfaceArea() {
    return this.length ** 2 * 6;
  }
}

const cubeAttrs = {
  length: 6,
  width: 6,
  height: 6,
}

const cube = new CubeMaker(cubeAttrs);
console.log(cube.volume(), cube.surfaceArea());