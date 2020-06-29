export class Player {

  constructor () {
    this.money = 200;
    this.fame = 0;
  }

  decreaseMoneyVal() {
    setInterval(() => {
      this.money-= 20;
    }, 15000)
  }

  decreaseFameVal() {
    setInterval(() => {
      this.fame-= 10;
    }, 10000)
  }

}