import INews from './INews'
import ICurrentWeather from './ICurrentWeather'
export default interface ICity {
  news: INews[]
  currentWeather: ICurrentWeather
}
