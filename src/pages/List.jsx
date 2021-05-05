import React,{ useState, useEffect} from 'react';

import { getOrders } from '../assets/services/apiConnections';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      margin: '20px auto',
    },
    container: {
      maxHeight: 440,
    },
  });
  

const List = () => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const columns = [
      { id: 'orderNumber', label: 'Numero de Orden', minWidth: 170 },
      { id: 'sellStore', label: 'Tienda', minWidth: 100 },
      {
        id: 'date',
        label: 'Fecha',
        minWidth: 170,
        align: 'right',
      },
      {
        id: 'shipping',
        label: 'Metodo de Envio',
        minWidth: 170,
        align: 'right',
      },
      {
        id: 'details',
        label: 'Detalles',
        minWidth: 170,
        align: 'right',
      },
    ];
    
    const rows = []

    useEffect(() => {
      getOrders().then(order => {rows.concat(order)})
    })

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        <Container>
            <h2>Lista de pedidos activos</h2>
            <Paper className={classes.root}>
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
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                            const value = row[column.id];
                            return (
                            <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                            );
                        })}
                        </TableRow>
                    );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </Paper>
        </Container>
    )
}

export default List