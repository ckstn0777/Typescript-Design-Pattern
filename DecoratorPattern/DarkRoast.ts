// 2. ConcreteComponent(구상구성요소)
import Beverage from './Beverage'

export default class DarkRoast extends Beverage {
  constructor() {
    super()
    this.description = '다크로스트'
  }

  cost(): number {
    return 1.0
  }
}
