import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import ICurrentWeather from '../../Resources/ICurrentWeather'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      color: '#767676',
    },
  })
)
interface IInfoCurrentWeatherProps {
  currentWeather: ICurrentWeather
}
const InfoCurrentWeather: React.FC<IInfoCurrentWeatherProps> = (props) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography
        gutterBottom
        variant="h6"
        component="h5"
        align="center"
        className={classes.title}
        color={'primary'}
      >
        Clima
      </Typography>
      <List className={classes.root} dense={true}>
        <ListItem>
          <ListItemText primary="Tiempo de Observación:" />
          {props.currentWeather.observationTime}
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Temperatura:" />
          {props.currentWeather.temperature}
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Velocidad del Viento:" />
          {props.currentWeather.windSpeed}
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Grado del viento:" />
          {props.currentWeather.windDegree}
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Presión:" />
          {props.currentWeather.pressure}
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Humedad:" />
          {props.currentWeather.humidity}
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Cantidad de nubes:" />
          {props.currentWeather.cloudCover}
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Tipo:" />
          {props.currentWeather.feelsLike}
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Visibilidad:" />
          {props.currentWeather.visibility}
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Descripción:" />
          {props.currentWeather.weatherDescriptions}
        </ListItem>
      </List>
    </React.Fragment>
  )
}
export default InfoCurrentWeather
