import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from './Appbar';

function createData(name,money) {
  return { name,money };
}

const rows = [
  createData('1', 6.0),
];

export default function Bill() {
  return (
    <><ResponsiveAppBar />
    <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell component="th" scope="row">Month</TableCell>
                      <TableCell align="right">Money&nbsp;(VND)</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {rows.map((row) => (
                      <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                          <TableCell component="th" scope="row">
                              {row.name}
                          </TableCell>
                          <TableCell align="right">{row.money}</TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer></>
  );
}