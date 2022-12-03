import Duck from "../Duck";
import FlyNoWay from "../FlyBehaviors/FlyNoWay";
import MuteQuack from "../QuackBehaviors/MuteQuack";

export default class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay(); // 기본 fly 핻동 지정
    this.quackBehavior = new MuteQuack(); // 기본 quack 핻동 지정
  }

  display() {
    return "I'm a rubber duck";
  }
}
