import DarkRoast from './DarkRoast'
import Mocha from './Mocha'
import Whip from './Whip'

test('Test Decorator Pattern - Beverage Simulator', () => {
  const beverage = new DarkRoast()
  expect(beverage.cost()).toEqual(1) // 다크로스트 1달러

  let beverage2 = new DarkRoast()
  beverage2 = new Whip(new Mocha(new Mocha(beverage2))) // 모카 2샷, 휘핑크림으로 마무리
  expect(beverage2.cost()).toEqual(1 + 0.5 * 2 + 0.1) // 다크로스트 1달러, 모카 0.5달러, 휘핑크림 0.1달러

  console.log(beverage2.getDescription()) // 다크로스트, 모카, 모카, 휘핑크림
})
