export default interface ICurrentWeather {
  observationTime: string
  temperature: number
  weatherDescriptions: string[]
  windSpeed: number
  windDegree: number
  pressure: number
  humidity: number
  cloudCover: number
  feelsLike: number
  visibility: number
}
