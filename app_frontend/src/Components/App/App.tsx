import React from 'react'
import AppLayout from '../Layouts/AppLayout.component'
import Router from '../Router/Router.component'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <AppLayout>
        <Router />
      </AppLayout>
    </React.Fragment>
  )
}

export default App
