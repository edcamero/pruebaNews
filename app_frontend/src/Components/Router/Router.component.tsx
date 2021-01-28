import React from 'react'
import Main from '../Main/Main.component'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchCity from '../SearchCity/SearchCity.component'
import History from '../History/History.component'
import AppLayout from '../Layouts/AppLayout.component'
import ViewCity from '../City/ViewCity.component'

const Router: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route path="/search">
              <SearchCity />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/city/:name">
              <ViewCity />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default Router
