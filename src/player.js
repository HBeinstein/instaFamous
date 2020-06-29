export class Player {

  constructor () {
    this.money = 200;
    this.fame = 0;

    this.moneyAttrition = 20;
    this.fameAttrition = 10;
    this.jobPayRate = 25;

    this.isBusy = false;
    this.instaImageFlag = false;
  }

  decreaseMoneyVal() {
    setInterval(() => {
      this.money-= this.moneyAttrition;
    }, 15000)
  }

  decreaseFameVal() {
    setInterval(() => {
      this.fame-= this.fameAttrition;
    }, 10000)
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
      this.money -= 50;
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
      this.moneyAttrition += 10;
      this.fameAttrition -= 5;
      this.instaImageFlag = true;

      setTimeout(()=> {
        this.moneyAttrition -= 10;
        this.fameAttrition += 5;
        this.instaImageFlag = false;
      }, 30000)
    }
  }


}