import Beverage from './Beverage'
import CondimentDecorator from './CondimentDecorator'

// 4. ConcreteDecorator(구상데코레이터)
export default class Milk extends CondimentDecorator {
  beverage: Beverage

  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', 우유'
  }

  cost(): number {
    return this.beverage.cost() + 0.77
  }
}
