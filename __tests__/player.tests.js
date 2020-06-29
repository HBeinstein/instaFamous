import {Player} from '../src/player.js'

describe('Player', ()=> {
  jest.useFakeTimers();
  let player;

  beforeEach(function() {
    player = new Player();
    player.fame += 50;
    player.decreaseMoneyVal();
    player.decreaseFameVal();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  test('should have a money and fame value when it is created', ()=> {
    expect(player.money).toEqual(200);
    expect(player.fame).toEqual(50);
  });

  test('should have a money value of 180 after 15 seconds', ()=> {
    jest.advanceTimersByTime(15001);
    expect(player.money).toEqual(180);
  });

  test('should have a fame value of 40 after 10 seconds', ()=> {
    jest.advanceTimersByTime(10001);
    expect(player.fame).toEqual(40);
  });

});



