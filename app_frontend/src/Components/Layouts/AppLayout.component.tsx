import React from 'react'
import Menu from '../Menu/Menu.component'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

interface IAppLayout {
  title?: string | undefined
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#512da8',
    },
    secondary: {
      main: '#767676',
    },
  },
})
const AppLayout: React.FC<IAppLayout> = (props) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Menu></Menu>
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  )
}
export default AppLayout
