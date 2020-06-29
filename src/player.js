export class Player {

  constructor () {
    this.money = 200;
    this.fame = 0;

    this.moneyAttrition = 20;
    this.fameAttrition = 10;
    this.jobPayRate = 25;
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
    setTimeout(()=> {
      this.money+= this.jobPayRate;
    },10000)
  }

  takeSelfies() {
    this.fame+= Math.floor(Math.random() * (5)) + 1;
  }

}