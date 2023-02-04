import MallardDuck from './Ducks/MallardDuck'
import FlyNoWay from './FlyBehaviors/FlyNoWay'
import MuteQuack from './QuackBehaviors/MuteQuack'

test('Test Strategy - Duck Simulator', () => {
  const mallardDuck = new MallardDuck()

  expect(mallardDuck.performFly()).toEqual("I'm flying")
  expect(mallardDuck.performQuack()).toEqual('quack')

  mallardDuck.setFlyBehavior(new FlyNoWay()) // 동적으로 변경이 쉽게 가능
  mallardDuck.setQuackBehavior(new MuteQuack()) // 동적으로 변경이 쉽게 가능

  expect(mallardDuck.performFly()).toEqual("I can't fly")
  expect(mallardDuck.performQuack()).toEqual('<< silence >>')
})
