import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import IHistory from '../../Resources/IHistory'
import LoadHistory from './LoadHistory.component'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import VisibilityIcon from '@material-ui/icons/Visibility'
import InfoCity from '../City/InfoCity.component'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      margin: theme.spacing(10, 0),
    },
    button: {
      margin: theme.spacing(5, 2),
    },
    container: {
      minHeight: 440,
    },
    root: {
      '& > *': {
        paddingVertical: theme.spacing(5),
      },
    },
    offset: theme.mixins.toolbar,
  })
)

interface IColumn {
  id: 'city' | 'size' | 'date' | 'temperature' | 'cloud' | 'action'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: IColumn[] = [
  { id: 'city', label: 'Ciudad', minWidth: 100 },
  { id: 'size', label: '# noticias', minWidth: 100 },
  {
    id: 'temperature',
    label: 'Teamperatura',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'cloud',
    label: 'Cantidad de nubes',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'date',
    label: 'Fecha Datos clima',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'date',
    label: 'Acción',
    minWidth: 170,
    align: 'right',
  },
]

const History: React.FC = () => {
  const classes = useStyles()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [historyAux, setHistoryAux] = React.useState<IHistory | null>(null)
  const [historyList, setHistoryList] = React.useState<IHistory[]>([])
  const [option, setOption] = React.useState('table')

  function handleClick(history: IHistory) {
    setHistoryAux(history)
    setOption('detail')
  }
  return (
    <React.Fragment>
      <LoadHistory
        isLoading={isLoading}
        setHistoryList={setHistoryList}
        setIsLoading={setIsLoading}
      ></LoadHistory>

      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          className={classes.main + ' ' + classes.offset}
        >
          <Paper className={classes.root}>
            {option === 'table' && isLoading && (
              <React.Fragment>
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {historyList.map((history, index) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell key={columns[0].id} align={columns[0].align}>
                              {history.city}
                            </TableCell>
                            <TableCell key={columns[1].id} align={columns[1].align}>
                              {history.info.news.length}
                            </TableCell>
                            <TableCell key={columns[2].id} align={columns[2].align}>
                              {history.info.currentWeather.temperature}
                            </TableCell>
                            <TableCell key={columns[3].id} align={columns[3].align}>
                              {history.info.currentWeather.cloudCover}
                            </TableCell>
                            <TableCell key={columns[4].id} align={columns[4].align}>
                              {history.info.currentWeather.observationTime}
                            </TableCell>
                            <TableCell key={columns[4].id} align={columns[4].align}>
                              <IconButton
                                aria-label="delete"
                                onClick={() => {
                                  handleClick(history)
                                }}
                              >
                                <VisibilityIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </React.Fragment>
            )}
            {option === 'detail' && isLoading && historyAux !== null && (
              <React.Fragment>
                <Button
                  color="secondary"
                  size="small"
                  startIcon={<ArrowBackIcon />}
                  onClick={() => setOption('table')}
                >
                  Atras
                </Button>
                <InfoCity city={historyAux.info} />
              </React.Fragment>
            )}
          </Paper>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
export default History
