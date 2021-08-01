import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function AssignmentSubmissionList(props) {
  const classes = useStyles();

  return (
    <TableContainer style={{width:'97%', marginTop:'10px', marginBottom:'20px', marginLeft:'10px'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{paddingLeft:'15px'}} class="header left">Reg. Number</TableCell>
            <TableCell class="header left">Name</TableCell>
            <TableCell class="header center">Submitted</TableCell>
            <TableCell class="header center" align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.submission.map((student) => (
            <TableRow style={{borderBottom:'1px solid #cecaca'}} key={student.reg}>
                <TableCell style={{paddingLeft:'15px', width:'19%', paddingRight:'4%'}} class="left">{student.reg}</TableCell>
            <TableCell style={{width:'43%'}} class="left">{student.name}</TableCell>
            <TableCell style={{padding:'2%', width:'18%'}} class="center">{student.time},{student.date}</TableCell>
            <TableCell style={{borderBottom:'1px solid #cecaca', width:'27%', textAlign:'right'}} align="right">
                <button className="main-button" style={{backgroundColor:'#36B3CE',fontSize:'15px',borderRadius:'6px', width:'200px'}}>Download Attatchment</button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
