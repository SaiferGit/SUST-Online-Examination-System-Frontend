import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import teacherFakeAssignment from '../../../TeacherData/teacherAssignments';
import { Link, useParams } from 'react-router-dom';
import AssignmentSubmissionList from '../../../components/Teacher/AssignmentSubmissionList/AssignmentSubmissionList';

const AssignmentSubmission = () => {


    const{assignmentId}=useParams();
    const exastingAssignment=teacherFakeAssignment.find(assignment=>assignment.id===assignmentId);
     console.log(exastingAssignment);
     const{title,date,submission}=exastingAssignment;

    return (
        <div style={{width:'65vw', position:'relative',marginTop:'50px', marginLeft:'0.75vw'}}>
            <div style={{display:'flex', position:'absolute'}}>
            <Link to="/teacher/assignments"><label><ArrowBackIcon style={{ fontSize: 45,marginRight:'10px',cursor:'pointer', color:'black' }}/></label></Link>
                <h3 style={{marginTop:'7px', width:'65vw', marginLeft:'0.60vw', fontWeight:'700'}}>{title}</h3>
            </div>
            <br/>
            <br/>
            <div style={{marginLeft:'2vw', marginTop:'20px', width:'70vw'}}>
                <h4 style={{marginLeft:'30px',color:'#692a86'}}>Dedline {date}</h4>
                
                <div style={{marginTop:'40px', marginLeft:'1.8vw', width:'68vw'}} className="exam-item justify-content-between">
                <AssignmentSubmissionList submission={submission}></AssignmentSubmissionList>

                </div>
                
            </div>
        </div>
    );
};

export default AssignmentSubmission;