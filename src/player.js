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

}