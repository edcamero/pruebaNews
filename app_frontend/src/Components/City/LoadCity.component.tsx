import React from 'react'
import ICity from '../../Resources/ICity'
interface ILoadCityProps {
  setCity: (value: ICity) => void
  name: string
  isLoading: boolean
}
const CityFiels: ICity = {
  news: [
    {
      author: 'pacho',
      title: 'fua a buscar pan y le dieron ban ban!!',
      description: 'joven en busca de pan ',
      url:
        'https://www.elespectador.com/noticias/salud/colombia-suspende-vuelos-procedentes-de-brasil-por-linaje-del-coronavirus/',
      urlToImage:
        'https://www.elespectador.com/resizer/IaYF1cfSrkQEcew4sO34KuhsQVE=/657x0/cloudfront-us-east-1.images.arcpublishing.com/elespectador/5SUPSZL3JFDBXL2NFAQQN7F3CI.jpg',
      publishedAt: '2021-01-28T13:24:46Z',
      content:
        'El Gobierno ordenó que se suspendan los vuelos debido a la presencia del linaje B.1.1.28., asociado con cambios genéticos que podrían tener un mayor impacto en la transmisibilidad y en la respuesta',
    },
  ],
  currentWeather: {
    observationTime: '7:00 pm',
    temperature: 4,
    weatherDescriptions: [],
    windSpeed: 20,
    windDegree: 21,
    pressure: 23,
    humidity: 22,
    cloudCover: 24,
    feelsLike: 25,
    visibility: 26,
  },
}
const LoadCity: React.FC<ILoadCityProps> = (props) => {
  React.useEffect(() => {
    if (props.isLoading && props.name !== '') {
      props.setCity(CityFiels)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLoading, props.name])
  return <React.Fragment></React.Fragment>
}
export default LoadCity
