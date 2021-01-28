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
      light: '#ff7961',
      main: '#ff7961',
      dark: '#ba000d',
      contrastText: '#000',
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
