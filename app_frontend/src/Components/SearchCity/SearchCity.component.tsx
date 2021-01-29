import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
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
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
)

const SearchCity: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const [nameCity, setnameCity] = React.useState('')
  const handleClick = (value: string) => {
    history.push(value + '/' + nameCity)
  }
  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.main}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Ciudad"
            variant="outlined"
            margin={'dense'}
            value={nameCity}
            onChange={(e) => setnameCity(e.target.value)}
          />
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={() => handleClick('/city')}
            className={classes.button}
          >
            Buscar
          </Button>
        </form>
      </Grid>
    </React.Fragment>
  )
}
export default SearchCity
