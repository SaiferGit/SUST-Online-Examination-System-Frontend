import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import './AllExamList.css';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function AllExamList(props) {
  const classes = useStyles();

  console.log(props);
  return (
    
      <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell class="header center" style={{paddingRight:'4%'}}>#</TableCell>
            <TableCell class="header left">Title</TableCell>
            <TableCell class="header center">Status</TableCell>
            <TableCell class="header center">Time</TableCell>
            <TableCell class="header center">Duration</TableCell>
            <TableCell class="header center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.exam.map((ex,i) => (
            <TableRow style={{borderBottom:'1px solid #cecaca'}} key={ex.id}>
              <TableCell class="center" style={{width:'9%', paddingRight:'4%'}}>{i+1}</TableCell>
              <TableCell class="left" style={{width:'22%'}}>{ex.title}</TableCell>
              <TableCell class="center" style={{width:'10%'}}>{ex.status}</TableCell>
              <TableCell class="center" style={{width:'16%'}}>{ex.time}</TableCell>
              <TableCell class="center" style={{width:'11%'}}>{ex.date}</TableCell>
                <TableCell class={"actioncol"} align="right">
                    <Link to={"/teacher/allexam/"+ex.id}><button className="main-button" style={{width:'80px'}}>Details</button></Link>
                    <button className="main-button" style={{marginLeft:'10px',backgroundColor:'rgb(165, 39, 39)', width:'80px'}}>Delete</button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
