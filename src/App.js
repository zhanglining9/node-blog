import React from 'react'
import Router from './router/Router'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './config/theme'
import 'typeface-roboto'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  )
}

export default App
