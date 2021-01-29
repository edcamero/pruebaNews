import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import InfoCurrentWeather from './InfoCurrentWeather.current'
import ICity from '../../Resources/ICity'
import NewsContainer from '../News/NewsContainer.component'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      margin: theme.spacing(10, 0),
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
    offset: theme.mixins.toolbar,
  })
)
interface IInfoCity {
  city: ICity
}
const InfoCity: React.FC<IInfoCity> = (props) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          className={classes.main + ' ' + classes.offset}
        >
          <Grid item xs={3}>
            <InfoCurrentWeather currentWeather={props.city.currentWeather} />
          </Grid>
          <Grid item xs={9}>
            <NewsContainer newsList={props.city.news}></NewsContainer>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
export default InfoCity
