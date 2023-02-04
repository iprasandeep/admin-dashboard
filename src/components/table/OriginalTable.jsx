import React from 'react'
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const OriginalTable = () => {
    const rows = [
        {
            id: '1232',
            product:"Lenovo IdealPad 9125",
            img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4m16e5SMuevHVrJtT_J0DVT1VpG2_r_EOSay8kwIVNAWk5mQmW8bk1_F8QNOwPqXgimegIzcAkcaTQqCmiit40wjKvjfZzRe3OjVBu18pYgM2LEb8vbgq',
            customer:'Neha Singh',
            date:'1 April',
            amount:'543032',
            method:'Cash On Delivery',
            status:'Pending'
        },
        {
          id: '1232',
          product:"Lenovo IdealPad 9125",
          img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4m16e5SMuevHVrJtT_J0DVT1VpG2_r_EOSay8kwIVNAWk5mQmW8bk1_F8QNOwPqXgimegIzcAkcaTQqCmiit40wjKvjfZzRe3OjVBu18pYgM2LEb8vbgq',
          customer:'Neha Singh',
          date:'1 April',
          amount:'543032',
          method:'Cash On Delivery',
          status:'Approved'
      },
      {
        id: '1232',
        product:"Lenovo IdealPad 9125",
        img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS4m16e5SMuevHVrJtT_J0DVT1VpG2_r_EOSay8kwIVNAWk5mQmW8bk1_F8QNOwPqXgimegIzcAkcaTQqCmiit40wjKvjfZzRe3OjVBu18pYgM2LEb8vbgq',
        customer:'Neha Singh',
        date:'1 April',
        amount:'543032',
        method:'Cash On Delivery',
        status:'Approved'
    }

    ]

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className='tableCell'>
              <div className="cellWrapper">
                <img src={row.img} alt="" className='image'/>
                {row.product}
              </div>
            </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OriginalTable;