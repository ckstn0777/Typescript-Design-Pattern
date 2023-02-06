import Beverage from './Beverage'

// 3. Decorator(추상데코레이터)
export default abstract class CondimentDecorator extends Beverage {
  abstract cost(): number
}
