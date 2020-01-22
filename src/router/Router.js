import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import asyncComponent from '../util/loader'
import Header from '../components/layout/header'

const AsyncHome = asyncComponent(() => import('../components/home/index'))

const contentStyles = makeStyles(theme => ({
  root: {
    paddingTop: 20
  }
}))

function router(props) {
  const classes = contentStyles()

  return (
    <Router>
      <Header />
      <Container className={classes.root} maxWidth="lg">
        <Switch>
          <Route exact path="/">
            <AsyncHome />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default router
