import React from 'react'
import Main from '../Main/Main.component'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchCity from '../SearchCity/SearchCity.component'
import History from '../History/History.component'

const Router: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <SearchCity />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default Router
