import {Player} from '../src/player.js'

describe('Player', ()=> {
  jest.useFakeTimers();
  let player;

  beforeEach(function() {
    player = new Player();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  test('should have a money and fame value when it is created', ()=> {
    expect(player.money).toEqual(200);
    expect(player.fame).toEqual(0);
  });

  test('should have a money value of 180 after 15 seconds', ()=> {
    jest.advanceTimersByTime(15001);
    expect(player.money).toEqual(180);
  });

});



