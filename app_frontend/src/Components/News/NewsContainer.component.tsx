import React from 'react'
import INews from '../../Resources/INews'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import NewsCard from './NewsCard.component'
import NewsDetails from './NewsDetails.component'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0, 0, 0, 0),
      width: '100%',
    },
    section: {
      width: '100%',
    },
    title: {
      color: '#f73378',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
    grid: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      padding: theme.spacing(2, 0, 3, 0),
    },
  })
)
interface INewsContainerProps {
  newsList: INews[]
}
const NewsContainer: React.FC<INewsContainerProps> = (props) => {
  const classes = useStyles()
  const [newsList] = React.useState<INews[]>(props.newsList)
  const [newsDetailFields, setNewsDetailFields] = React.useState<INews>(props.newsList[0])
  const [option, setOption] = React.useState('list')

  return (
    <React.Fragment>
      {option === 'list' && (
        <div className={classes.section}>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            className={classes.title}
            align="center"
          >
            Noticias
          </Typography>
          <Grid alignItems="center" justify="space-around" container className={classes.root}>
            <Grid
              container
              justify="space-around"
              direction="row"
              alignItems="center"
              className={classes.grid}
            >
              {newsList !== undefined &&
                newsList.map((newsItem: INews, index) => {
                  return (
                    <NewsCard
                      news={newsItem}
                      key={index}
                      setOption={setOption}
                      setNewsDetailFields={setNewsDetailFields}
                    ></NewsCard>
                  )
                })}
            </Grid>
          </Grid>
        </div>
      )}
      {option === 'detail' && (
        <NewsDetails news={newsDetailFields} setOption={setOption}></NewsDetails>
      )}
    </React.Fragment>
  )
}
export default NewsContainer
