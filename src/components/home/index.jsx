import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { addCounter } from '../../store/home/aciton'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  self: {
    height: 400,
    background: 'lightblue',
    marginBottom:10
  }
}))

function Home(props) {
  const classes = useStyles()
  const countRef = useRef(0)

  function handleAddCounter() {
    props.addCounter(++countRef.current)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Button variant="contained" onClick={handleAddCounter}>
            Default
          </Button>
          <div>{props.count}</div>
          <div className={classes.self}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.self}></div>
          <div className={classes.self}></div>
        </Grid>
      </Grid>
    </div>
  )
}

export default connect(state => ({ ...state.counter }), {
  addCounter
})(Home)
