import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    dividerFullWidth: {
      margin: `1px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
      margin: `1px 0 0 ${theme.spacing(9)}px`,
    },
  })
)

const InfoCurrentWeather: React.FC = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <List className={classes.root}>
        <ListItem>
          <ListItemText primary="Tiempo de Observación" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider component="li" />
      </List>
    </React.Fragment>
  )
}
export default InfoCurrentWeather
