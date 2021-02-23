import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './StudentMyExamList.css'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function StudentMyExamList(props) {
  const classes = useStyles();

  console.log(props);
  return (
    <div className="exam-item d-flex justify-content-between">
      <Table style={{width:'99.5%', marginTop:'10px', marginBottom:'20px', marginLeft:'10px', marginRight:'-10px'}} cellspacing="0" cellpadding="0" className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow class="tableheader">
            <TableCell class="header center" align="center">#</TableCell>
            <TableCell class="header left">Title</TableCell>
            <TableCell class="header center">Status</TableCell>
            {/* <TableCell class="header center">Time</TableCell> */}
            <TableCell class="header center">Date</TableCell>
            <TableCell class="header center" align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.exam.map((ex,i) => (
            <TableRow style={{borderBottom:'1px solid #cecaca'}} key={ex.id}>
              <TableCell style={{width:'9%'}} class="center">{i+1}</TableCell>
              <TableCell style={{width:'35%'}}  class="left">{ex.title}</TableCell>
              <TableCell style={{width:'10%'}} class="center">{ex.status}</TableCell>
              {/* <TableCell>{ex.time}</TableCell> */}
              <TableCell style={{width:'20%'}} class="center">{ex.date}</TableCell>
              {
                  ex.status==='Finished' ? 
                  <TableCell style={{width:'35%', paddingTop:'8px', paddingBottom:'8px'}} class="center" align="center">
                      <button className="main-button" style={{width:'125px', marginRight:'10px'}}>Show Result</button>
                      <button className="main-button feedback-button">Feedback</button>
                  </TableCell>
                  : <TableCell style={{paddingTop:'8px', paddingBottom:'8px', width:'35%'}} class="center" align="center">
                      <button style={{width:'100px'}} className="main-button">Details</button>
                  </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>    
    </div>
    
  );
}
