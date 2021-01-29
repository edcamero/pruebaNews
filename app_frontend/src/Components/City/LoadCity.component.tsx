import React from 'react'
import ICity from '../../Resources/ICity'
interface ILoadCityProps {
  setCity: (value: ICity | null) => void
  name: string
  isLoading: boolean
  setIsProcessed: (value: boolean) => void
}

const LoadCity: React.FC<ILoadCityProps> = (props) => {
  React.useEffect(() => {
    if (props.isLoading && props.name !== '') {
      fetch(process.env.REACT_APP_API_URL + 'city?name=' + props.name || '')
        .then((res) => {
          if (!res.ok) throw Error('' + res.status)
          return res.json()
        })
        .then((result) => {
          props.setCity(result)
          props.setIsProcessed(true)
        })
        .catch(() => props.setCity(null))
        .then(() => props.setIsProcessed(true))
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLoading, props.name])
  return <React.Fragment></React.Fragment>
}
export default LoadCity
