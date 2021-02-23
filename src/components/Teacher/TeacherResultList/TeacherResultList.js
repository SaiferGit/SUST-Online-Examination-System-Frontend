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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TeacherResultList(props) {
  const classes = useStyles();

  console.log(props);
  return (
    <TableContainer>
      <Table class="mt-3" className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{paddingRight:'4%'}} class="header center">#</TableCell>
            <TableCell class="header left">Title</TableCell>
            <TableCell class="header center">Taken</TableCell>
            {/* <TableCell class="header">Date</TableCell> */}
            <TableCell class="header center" align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.result.map((ex,i) => (
            <TableRow style={{borderBottom:'1px solid #cecaca'}} key={ex.id}>
              <TableCell style={{width:'9%', paddingRight:'4%'}} class="center" >{i+1}</TableCell>
              <TableCell class="left" style={{width:'43%'}} >{ex.title}</TableCell>
              <TableCell class="center" style={{padding:'2%', width:'18%'}}>{ex.time}</TableCell>
              {/* <TableCell>{ex.date}</TableCell> */}
                <TableCell style={{borderBottom:'1px solid #cecaca', width:'27%', textAlign:'right'}} align="right">
                    <Link to={"/teacher/results/"+ex.id}><button className="main-button" style={{width:'125px'}}>Show Result</button></Link>
                    <button className="main-button" style={{marginLeft:'10px',backgroundColor:' #36b3ce', width:'125px'}}>Re-evaluate</button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
