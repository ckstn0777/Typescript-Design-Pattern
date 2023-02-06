import Beverage from './Beverage'
import CondimentDecorator from './CondimentDecorator'

// 4. ConcreteDecorator(구상데코레이터)
export default class Mocha extends CondimentDecorator {
  beverage: Beverage

  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', 모카'
  }

  cost(): number {
    return this.beverage.cost() + 0.5
  }
}
