import {Player} from '../src/player.js'

describe('Player', ()=> {
  jest.useFakeTimers();
  let player;

  beforeEach(function() {
    player = new Player();
    player.fame = 50;
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

  test('should have a money value reduced by the money attrition rate after 15 seconds', ()=> {
    jest.advanceTimersByTime(15001);
    expect(player.money).toEqual(200 - player.moneyAttrition);
  });

  test('should have a fame value reduced by the fame attrition rate after 10 seconds', ()=> {
    jest.advanceTimersByTime(10001);
    expect(player.fame).toEqual(50 - player.fameAttrition);
  });

  test('should increase money after 10 seconds by the Job pay rate after 10 seconds when working', ()=> {
    player.work();
    jest.advanceTimersByTime(10001);
    expect(player.money).toEqual(200 + player.jobPayRate);
  });

  test('should randomly increase fame value after 5 seconds when taking selfies', ()=> {
    player.takeSelfies();
    jest.advanceTimersByTime(10001);
    expect(player.fame).toBeGreaterThan(40);
  });

  test('should randomly decrease fame and randomly increase money after 5 seconds when asking for free stuff', ()=> {
    player.getFreeStuff();
    jest.advanceTimersByTime(10001);
    expect(player.fame).toBeLessThan(40);
    expect(player.money).toBeGreaterThan(200);
  });

  test('should greatly increase fame, but greatly loose money by "Living Lavishly" after 8 seconds', ()=> {
    player.liveLavishly();
    jest.advanceTimersByTime(8001);
    expect(player.fame).toEqual(65);
    expect(player.money).toEqual(150);
  });

  // test('should prevent user from advertising products until they reach 50 fame', ()=> {
  //   player.advertiseProducts();
  //   expect(player.advertiseProducts).toEqual("");
  // });

  test('should increase money and slightly decrease fame after 10 seconds for advertising products', ()=> {
    player.advertiseProducts();
    jest.advanceTimersByTime(10001);
    expect(player.money).toEqual(210);
    expect(player.fame).toEqual(35);
  });


});



