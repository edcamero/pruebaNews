import React from 'react'
import ICity from '../../Resources/ICity'
interface ILoadCityProps {
  setCity: (value: ICity) => void
  name: string
  isLoading: boolean
}

const LoadCity: React.FC<ILoadCityProps> = (props) => {
  React.useEffect(() => {
    if (props.isLoading && props.name !== '') {
      fetch(process.env.REACT_APP_API_URL + 'city?name=' + props.name || '')
        .then((res) => res.json())
        .then((result) => {
          props.setCity(result)
        })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLoading, props.name])
  return <React.Fragment></React.Fragment>
}
export default LoadCity
