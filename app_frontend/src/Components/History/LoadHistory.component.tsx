import React from 'react'
import IHistory from '../../Resources/IHistory'
import IHistoryRest from '../../Resources/IHistoryRest'
interface ILoadHistoryProps {
  setHistoryList: (value: IHistory[]) => void
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}
const LoadHistory: React.FC<ILoadHistoryProps> = (props) => {
  React.useEffect(() => {
    if (!props.isLoading) {
      fetch(process.env.REACT_APP_API_URL + 'history' || '')
        .then((res) => res.json())
        .then((result: IHistoryRest) => {
          props.setHistoryList(result.history)
        })
        .then(() => {
          props.setIsLoading(true)
        })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLoading, props.setHistoryList])
  return <React.Fragment></React.Fragment>
}
export default LoadHistory
