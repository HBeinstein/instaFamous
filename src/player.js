export class Player {

  constructor () {
    this.money = 200;
    this.fame = 0;

    this.moneyAttritionVal = 20;
    this.fameAttritionVal = 10;
    this.jobPayRate = 25;

    this.isBusy = false;
    this.instaImageFlag = false;
    this.hasLost = false;
  }

  moneyAttrition() {
    setInterval(() => {
      this.decreaseMoney(this.moneyAttritionVal);
    }, 15000)
  }

  fameAttrition() {
    setInterval(() => {
      this.fame-= this.fameAttritionVal;
    }, 10000)
  }

  decreaseMoney(num) {
    this.money-= num;

    if (this.money <= 0) {
      this.hasLost = true;
    }
  }

  work() {
    this.isBusy = true;
    setTimeout(()=> {
      this.money+= this.jobPayRate;
      this.isBusy = false;
    },10000)
  }

  takeSelfies() {
    this.isBusy = true;
    setTimeout(()=> {
      this.fame+= this.randomInterger(1, 5);
      this.isBusy = false;
    }, 5000)
  }

  getFreeStuff() {
    this.isBusy = true;
    setTimeout(()=> {
      this.fame-= this.randomInterger(1, 5);
      this.money+= this.randomInterger(1, 5);
      this.isBusy = false;
    }, 5000)
  }

  randomInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  liveLavishly() {
    this.isBusy = true;
    setTimeout(()=> {
      this.decreaseMoney(50);
      this.fame += 15;
      this.isBusy = false;
    }, 8000)
  }

  advertiseProducts() {
    if (this.fame >= 50) {
      this.isBusy = true;
      setTimeout(()=> {
        this.money += 10;
        this.fame -= 5;
        this.isBusy = false;
      }, 10000)
    }
  }

  instaImage() {
    if (this.instaImageFlag === false) {
      this.moneyAttritionVal += 10;
      this.fameAttritionVal -= 5;
      this.instaImageFlag = true;

      setTimeout(()=> {
        this.moneyAttritionVal -= 10;
        this.fameAttritionVal += 5;
        this.instaImageFlag = false;
      }, 30000)
    }
  }


}