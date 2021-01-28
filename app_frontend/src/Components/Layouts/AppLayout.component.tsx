import React from 'react'
interface IAppLayout {
  title?: string | undefined
}
const AppLayout: React.FC<IAppLayout> = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>
}
export default AppLayout
