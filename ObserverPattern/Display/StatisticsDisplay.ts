import IObserver from '../IObserver'
import ISubject from '../ISubject'
import IDisplayElement from './IDisplayElement'

export default class StatisticsDisplay implements IObserver, IDisplayElement {
  private temperature: number
  private humidity: number
  private weatherData: ISubject

  // 생성자에 weatherData라는 주제가 전달되며, 이 객체를 써서 디스플레이를 옵저버로 등록한다.
  constructor(wd: ISubject) {
    this.weatherData = wd
    wd.registerObserver(this)
  }

  update(temp: number, humidity: number, pressure: number) {
    this.temperature = temp
    this.humidity = humidity
    this.display()
  }

  display() {
    console.log(
      `Statistics conditions: 온도 ${this.temperature} 도, 습도 ${this.humidity} % 입니다.`
    )
  }
}
