export default interface IObserver {
  // Subject에서 notifyObserver를 하면 Observer마다 update가 실행될 거임
  update(temp: number, humidity: number, pressure: number): void;
}