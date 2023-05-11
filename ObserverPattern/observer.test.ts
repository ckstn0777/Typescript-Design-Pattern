import CurrentConditionsDisplay from './Display/CurrentConditionsDisplay'
import StatisticsDisplay from './Display/StatisticsDisplay'
import WeatherStation from './WeatherStation'

test('Test Observer Pattern - WeatherStation Display Simulator', () => {
  const weatherStation = new WeatherStation()

  // 디스플레이(옵저버, 구독자) 등록. 지금은 귀찮아서 한개만 등록했지만 이런식으로 디스플레이를 확장시킬 수 있음.
  const currentConditionsDisplay = new CurrentConditionsDisplay(weatherStation)
  const statisticsDisplay = new StatisticsDisplay(weatherStation)

  weatherStation.setMeasurements(7, 55, 30.4)

  // 결과:
  // Current conditions: 온도 7 도, 습도 55 % 입니다.
})
