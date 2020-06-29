import {Player} from '../src/player.js'

describe('Player', ()=> {
  jest.useFakeTimers();
  let player;

  beforeEach(function() {
    player = new Player();
    player.fame = 50;
    player.moneyAttrition();
    player.fameAttrition();
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
    expect(player.money).toEqual(200 - player.moneyAttritionVal);
  });

  test('should have a fame value reduced by the fame attrition rate after 10 seconds', ()=> {
    jest.advanceTimersByTime(10001);
    expect(player.fame).toEqual(50 - player.fameAttritionVal);
  });

  test('should increase money after 10 seconds by the Job pay rate after 10 seconds when working', ()=> {
    player.work();
    jest.advanceTimersByTime(10001);
    expect(player.money).toEqual(200 + player.jobPayRate);
  });

  test('should randomly increase fame value after 5 seconds when taking selfies', ()=> {
    player.takeSelfies();
    jest.advanceTimersByTime(5001);
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

  
  test('should increase money and slightly decrease fame after 10 seconds for advertising products', ()=> {
    player.advertiseProducts();
    jest.advanceTimersByTime(10001);
    expect(player.money).toEqual(210);
    expect(player.fame).toEqual(35);
  });
        
  test('should prevent user from advertising products until they reach 50 fame', ()=> {
    player.fame = 20;
    player.advertiseProducts();
    jest.advanceTimersByTime(10001);
    expect(player.fame).toEqual(10);
  });

  test('should lessen fame attrition and increase money attrition for 30 seconds', ()=> {
    player.instaImage();
    expect(player.moneyAttritionVal).toEqual(30);
    expect(player.fameAttritionVal).toEqual(5);

    jest.advanceTimersByTime(30001);
    expect(player.moneyAttritionVal).toEqual(20);
    expect(player.fameAttritionVal).toEqual(10);
  });

  test('should not engage multiple user activities simultaneously', () => {
    expect(player.isBusy).toBeFalsy();

    player.work();
    player.takeSelfies();
    expect(player.isBusy).toBeTruthy();
    
    jest.advanceTimersByTime(10001);
    
    expect(player.isBusy).toBeFalsy();
    expect(player.money).toEqual(200 + player.jobPayRate);
    expect(player.fame).not.toEqual(40);
  });

  test('should cause player to loose if money is reduced below 0', () => {
    player.money = 10;
    player.hasLost = false;

    jest.advanceTimersByTime(15001);

    expect(player.money).toEqual(-10);
    expect(player.hasLost).toBe(true);
  });

  test('should never allow fame to drop below 0', ()=> {
    player.fame = 0;
    jest.advanceTimersByTime(10001);
    expect(player.fame).toEqual(0);
  });

  test('should win if fame reaches 100', ()=> {
    player.fame = 99;
    expect(player.hasWon).toBeFalsy();
    player.liveLavishly();
    jest.advanceTimersByTime(8001);
    expect(player.hasWon).toBeTruthy();
  });
});



