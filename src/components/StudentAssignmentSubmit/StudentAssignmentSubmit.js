import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './StudentAssignmentSubmit.css'
import fakeStudentAssignment from '../../fakeStudentAssignment'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const StudentAssignmentSubmit = () => {
    const{assignmentId}=useParams();
    console.log(fakeStudentAssignment);
    console.log(assignmentId);

    const exastingAssignment=fakeStudentAssignment.find(assignment=>assignment.id===assignmentId);
    const{title,status,date,description}=exastingAssignment;

    const handleSubmit=()=>{
       console.log("submit");
    }

    return (
        <div>
            <div class="assignmentSubmission" style={{margin:'6vh 10px 20px 0.8vw',width:'70vw', position:'relative'}}>
                <div style={{display:'flex', position:'absolute'}}>
                <Link to="/student/assignments"><label><ArrowBackIcon style={{ fontSize: 50,marginRight:'1vw',cursor:'pointer', color:'black' }}/></label></Link>
                    <h3 >{title}</h3>
                </div>
                <br/>
                <br/>
                <div class="assignmentDetails">
                    <h5>{status} {date}</h5>
                    <p>{description}</p>
                    <label style={{color:'blue'}}> Attach Your Work</label>
                    <br/>
                   
                    <input id="fileChoose" placeholder="+Attach your work" type="file" />
                    <br/>
                    <br/>
                    <Link to="/student/assignments"><button  className="submit" onClick={handleSubmit}>Submit</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default StudentAssignmentSubmit;