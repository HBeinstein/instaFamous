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
    this.hasWon = false;
  }

  moneyAttrition() {
    setInterval(() => {
      this.decreaseMoney(this.moneyAttritionVal / 15);
    }, 1000);
  }

  fameAttrition() {
    setInterval(() => {
      this.adjustFame(0, (this.fameAttritionVal / 10));
    }, 1000);
  }

  decreaseMoney(num) {
    this.money-= num;

    if (this.money <= 0) {
      this.hasLost = true;
    }
  }

  adjustFame(posOrNeg, num) {
    if( posOrNeg === 1) {
      this.fame += num;
      if (this.fame >= 100) {
        this.hasWon = true;
      }
    } else {
      this.fame -= num;
      if (this.fame < 0) {
        this.fame = 0;
      }
    }
  }

  work() {
    if (this.isBusy === false) {
      this.isBusy = true;
      setTimeout(()=> {
        this.money+= this.jobPayRate;
        this.isBusy = false;
      },10000);
    }
  }

  takeSelfies() { 
    if (this.isBusy === false) {
      this.isBusy = true;
      setTimeout(()=> {
        this.adjustFame(1, this.randomInterger(1, 5));
        this.isBusy = false;
      }, 5000);
    }
  }


  getFreeStuff() {
    if (this.isBusy === false) {
      this.isBusy = true;
      setTimeout(()=> {
        this.adjustFame(0, this.randomInterger(1, 5));
        this.money+= this.randomInterger(1, 5);
        this.isBusy = false;
      }, 5000);
    } 
  }

  randomInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  liveLavishly() {
    if (this.isBusy === false) {
      this.isBusy = true;
      setTimeout(()=> {
        this.decreaseMoney(50);
        this.adjustFame(1, 15);
        this.isBusy = false;
      }, 8000);
    } 
  }

  advertiseProducts() {
    if(this.isBusy === false) {
      if (this.fame >= 50) {
        this.isBusy = true;
        setTimeout(()=> {
          this.money += 10;
          this.adjustFame(0, 5);
          this.isBusy = false;
        }, 10000);
      }
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
      }, 30000);
    }
  }
}