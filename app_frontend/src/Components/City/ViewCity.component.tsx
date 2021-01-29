import React from 'react'
import ICity from '../../Resources/ICity'
import InfoCity from './InfoCity.component'
import LoadCity from './LoadCity.component'
import { useParams } from 'react-router-dom'
import Message from '../Message/Message.component'
import { useHistory } from 'react-router-dom'

const ViewCity: React.FC = () => {
  const [city, setCity] = React.useState<ICity | null>(null)
  const [cityName, setCityName] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isProcessed, setIsProcessed] = React.useState<boolean>(false)
  const [open, setOpen] = React.useState<boolean>(false)
  const [error, setError] = React.useState<boolean>(false)
  const history = useHistory()
  const params = useParams()

  React.useEffect(() => {
    if (!isLoading && 'name' in params) {
      setCityName(params['name'])
      setIsLoading(true)
    }
  }, [isLoading, params, setCityName, setIsLoading])

  React.useEffect(() => {
    if (!open && isProcessed && city === null) {
      setError(true)
      setOpen(true)
    }
  }, [isProcessed, city, open, setError])
  React.useEffect(() => {
    if (!open && error) {
      history.goBack()
    }
  }, [open, error, history])
  return (
    <React.Fragment>
      <LoadCity
        setCity={setCity}
        name={cityName}
        isLoading={isLoading}
        setIsProcessed={setIsProcessed}
      ></LoadCity>
      {city !== null && <InfoCity city={city}></InfoCity>}
      <Message open={open} setOpen={setOpen} title={'Error'} message={'Ciudad no existe'}></Message>
    </React.Fragment>
  )
}
export default ViewCity
