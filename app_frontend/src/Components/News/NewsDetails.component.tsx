import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import INews from '../../Resources/INews'
import TodayIcon from '@material-ui/icons/Today'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textTitle: {
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
        fontSize: '1rem',
      },
    },
    divider: {
      width: '100%',
    },
    textContent: {
      fontSize: '1.0rem',
      textAlign: 'justify',
    },
    image: {
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        height: '20%',
        width: '100%',
        margin: theme.spacing(2, 0, 0, 0),
      },
    },
    dateText: {
      fontSize: '1rem',
      width: '100%',
    },
  })
)

interface INewsDetails {
  news: INews
  setOption: (value: string) => void
}
const NewsDetails: React.FC<INewsDetails> = (props) => {
  const classes = useStyles()
  function handleClick() {
    props.setOption('list')
  }
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h4" component="h5" className={classes.textTitle} color={'secondary'}>
          {props.news.title}
        </Typography>
        <Divider className={classes.divider} color={'primary'} />
        <Grid container item xs={12} direction="row" justify="space-between" alignItems="center">
          <Grid item>
            <TodayIcon />
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.dateText} gutterBottom>
              {props.news.publishedAt}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.dateText} gutterBottom>
              Escrito por: {props.news.author}
            </Typography>
          </Grid>
          <Grid>
            <Button
              color="secondary"
              size="small"
              startIcon={<ArrowBackIcon />}
              onClick={handleClick}
            >
              Atras
            </Button>
          </Grid>
        </Grid>
        <Divider className={classes.divider} color={'primary'} />
        <Grid container item xs={12} direction="row" justify="flex-start" alignItems="center">
          <img
            src={props.news.urlToImage}
            className={classes.image}
            alt="imagen de inicio"
            data-testid="bulletin-image"
          />
          <div className={classes.textContent}>
            <b>Descripción:</b>
            {' ' + props.news.description}
          </div>
          <div className={classes.textContent}>
            <b>Contenido:</b>
            {' ' + props.news.content}
          </div>
          <Typography variant="body1" className={classes.dateText} gutterBottom>
            <Link href={props.news.url}>Origen de la noticia {props.news.url}</Link>
          </Typography>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
export default NewsDetails
