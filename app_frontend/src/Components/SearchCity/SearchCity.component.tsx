import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

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

const SearchCity: React.FC = () => {
  const classes = useStyles()
  const handleClick = () => {
    return 'hola'
  }
  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.main}>
        Buscando
        <Button variant="outlined" color="primary" onClick={handleClick} className={classes.button}>
          Ver Historial
        </Button>
      </Grid>
    </React.Fragment>
  )
}
export default SearchCity
