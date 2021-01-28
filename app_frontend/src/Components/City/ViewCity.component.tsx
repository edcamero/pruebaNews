import React from 'react'
import ICity from '../../Resources/ICity'
import InfoCity from './InfoCity.component'
import LoadCity from './LoadCity.component'
import { useParams } from 'react-router-dom'

const ViewCity: React.FC = () => {
  const [city, setCity] = React.useState<ICity | null>(null)
  const [cityName, setCityName] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const params = useParams()

  React.useEffect(() => {
    if (!isLoading && 'name' in params) {
      setCityName(params['id'])
      setIsLoading(true)
    }
  }, [isLoading, params, setCityName, setIsLoading])
  return (
    <React.Fragment>
      <LoadCity setCity={setCity} name={cityName} isLoading={isLoading}></LoadCity>
      {city !== null && <InfoCity city={city}></InfoCity>}
    </React.Fragment>
  )
}
export default ViewCity
