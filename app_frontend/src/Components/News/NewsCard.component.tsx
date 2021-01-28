import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import INews from '../../Resources/INews'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 200,
      minHeight: 200,
      margin: theme.spacing(1, 0, 'auto', 0),
    },
    title: {
      color: '#767676',
    },
    actions: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
)
interface INewsCardProps {
  news: INews
  setOption: (value: string) => void
  setNewsDetailFields: (value: INews) => void
}
const NewsCard: React.FC<INewsCardProps> = (props) => {
  const classes = useStyles()
  function fixedTitle(title: string) {
    if (title.length > 44) {
      title = title.slice(0, 41) + '...'
    }
    return title
  }
  function handleClick() {
    props.setNewsDetailFields(props.news)
    props.setOption('detail')
  }
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={'image news'}
            height="100"
            image={props.news.urlToImage}
            title={'image ' + props.news.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h5"
              align="center"
              className={classes.title}
            >
              {fixedTitle(props.news.title)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button size="small" color="primary" onClick={handleClick}>
            Leer...
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  )
}
export default NewsCard
