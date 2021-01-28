import React from 'react'
import Main from '../Main/Main.component'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default Router
