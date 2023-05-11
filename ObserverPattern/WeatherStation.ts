import ISubject from './ISubject'
import IObserver from './IObserver'

// WeatherStation이 곧 Subject
export default class WeatherStation implements ISubject {
  private observers: IObserver[]
  private temperature: number
  private humidity: number
  private pressure: number

  constructor() {
    this.observers = [] // 옵저버 등록
  }

  registerObserver(o: IObserver) {
    this.observers.push(o)
  }

  removeObserver(o: IObserver) {
    console.log(o)
    let index = this.observers.indexOf(o)
    if (index !== -1) {
      this.observers.splice(index, 1)
    }
  }

  notifyObserver() {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].update(this.temperature, this.humidity, this.pressure)
    }
  }

  // 기상 스테이션으로부터 갱신된 측정값을 받으면 옵저버들에게 알림
  measurementsChanged() {
    this.notifyObserver()
  }

  // 실제 장비로부터 진짜 기상 데이터를 가져오는 대신 이 메서드를 통해 임의로 가정함
  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure

    this.measurementsChanged()
  }
}
