import FlyBehavior from "./FlyBehavior";

export default class FlyNoWay implements FlyBehavior {
  fly() {
    return "I can't fly";
  }
}
