import Duck from "../Duck";
import FlyWithWings from "../FlyBehaviors/FlyWithWings";
import Quack from "../QuackBehaviors/Quack";

export default class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings(); // 기본 fly 핻동 지정
    this.quackBehavior = new Quack(); // 기본 quack 핻동 지정
  }

  display() {
    return "I'm a mallard duck";
  }
}
