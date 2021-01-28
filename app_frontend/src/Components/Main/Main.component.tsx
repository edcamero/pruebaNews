import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      margin: theme.spacing(18, 0),
    },
    button: {
      margin: theme.spacing(5, 2),
    },
  })
)
const Main: React.FC = () => {
  const history = useHistory()
  const classes = useStyles()
  const handleClickHome = (value: string) => {
    history.push(value)
  }

  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.main}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleClickHome('/search')}
          className={classes.button}
        >
          Buscar Ciudad
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleClickHome('/history')}
          className={classes.button}
        >
          Historial
        </Button>
      </Grid>
    </React.Fragment>
  )
}
export default Main
