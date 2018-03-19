export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    // something if food level 0 you got eaten aka true you got eaten
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }

  // eat((food) => {
  //   function() {
  //       this.foodLevel+=food.length;
  //       return `${food} eaten, new food level is ${this.foodLevel}`
  //     }
  //   }
  // })

  eat(food) {
    return function() {
      this.foodLevel+=food.length;
      console.log(this.foodLevel)
      return `${food} eaten, new food level is ${this.foodLevel}`
    }
  }


}
