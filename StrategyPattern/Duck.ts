import FlyBehavior from "./FlyBehaviors/FlyBehavior";
import QuackBehavior from "./QuackBehaviors/QuackBehavior";

export default abstract class Duck {
  public flyBehavior: FlyBehavior;
  public quackBehavior: QuackBehavior;

  constructor() {}

  public abstract display(): string;

  public swim() {
    console.log("All ducks float");
  }

  /**
   * 나는 행동을 FlyBehavior 인터페이스에 위임
   */
  public performFly() {
    return this.flyBehavior.fly();
  }

  /**
   * 꽥꽥 소리 내는 행동을 QuackBehavior 인터페이스에 위임
   */
  public performQuack() {
    return this.quackBehavior.quack();
  }

  /**
   * 원한다면 동적으로 fly 행동을 변경할 수 있다
   * @param fb
   */
  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  /**
   * 원한다면 동적으로 quack 행동을 변경할 수 있다
   * @param qb
   */
  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }
}
