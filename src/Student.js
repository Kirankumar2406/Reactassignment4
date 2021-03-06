
import React, { useState  } from 'react'
import { Link } from 'react-router-dom'

// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './style.css'


const Student = () => {

    const [data] =useState([
        {name:'Jhon' ,age:24,course:'MERN',batch:'October',edit: <Link to='#'>Edit</Link>},
        {name:'Doe' ,age:25,course:'MERN',batch:'November',edit: <Link to='#'>Edit</Link>},
        {name:'Biden' ,age:24,course:'MERN',batch:'October',edit: <Link to='#'>Edit</Link>},
        {name:'Barar' ,age:24,course:'MERN',batch:'September',edit: <Link to='#'>Edit</Link>},
        {name:'Christ' ,age:24,course:'MERN',batch:'October',edit: <Link to='#'>Edit</Link>},
        {name:'Elent' ,age:24,course:'MERN',batch:'November',edit: <Link to='#'>Edit</Link>},
        {name:'Harshita Sharma' ,age:24,course:'MERN',batch:'November',edit: <Link to='#'>Edit</Link>}
    ])
    

  return (
    <div className='tableContainer'>

      <div>
        <h1>Student details</h1>
        <button>Add new student</button>
      </div>

   
<TableContainer component={Paper}>
      <Table  size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">course&nbsp;</TableCell>
            <TableCell align="right">Batch&nbsp;</TableCell>
            <TableCell align="right">Change&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row"> {row.name} </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right">{row.edit}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default Student