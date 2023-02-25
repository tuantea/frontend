import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from './Appbar';
import { styled } from '@mui/material/styles';
function createData(name, fat, carbs, protein) {
  return { name, fat, carbs, protein };
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#5DCBAF",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
      backgroundColor: theme.palette.common.white,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      top:-100,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
const rows = [
  createData('0-1', 6.0, 24, 4.0),
  createData('1-2', 9.0, 37, 4.3),
  createData('2-3', 16.0, 24, 6.0),
  createData('3-4', 3.7, 67, 4.3),
  createData('4-5', 16.0, 49, 3.9),
];

export default function Volume() {
  return (
    <><ResponsiveAppBar />
    <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                  <StyledTableRow>
                      <StyledTableCell>Hour</StyledTableCell>
                      <StyledTableCell align="right">Hot&nbsp;(V)</StyledTableCell>
                      <StyledTableCell align="right">Temp Hot&nbsp;(C)</StyledTableCell>
                      <StyledTableCell align="right">Cold&nbsp;(V)</StyledTableCell>
                  </StyledTableRow>
              </TableHead>
              <TableBody>
                  {rows.map((row) => (
                      <StyledTableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                          <StyledTableCell component="th" scope="row">
                              {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.fat}</StyledTableCell>
                          <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                          <StyledTableCell align="right">{row.protein}</StyledTableCell>
                      </StyledTableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer></>
  );
}