import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import InfoCurrentWeather from './InfoCurrentWeather.current'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      margin: theme.spacing(5, 0),
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
const InfoCity: React.FC = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.main}
        >
          <Grid item xs={3}>
            <InfoCurrentWeather />
          </Grid>
          <Grid item xs={9}>
            tarjetas de noticias
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
export default InfoCity
