import IObserver from "./IObserver";

export default interface ISubject {
  registerObserver(o: IObserver): void; // 옵저버 등록(구독)
  removeObserver(o: IObserver): void; // 옵저버 제거(구독해지)
  notifyObserver(): void; // 옵저버(구독자)에게 알림
}