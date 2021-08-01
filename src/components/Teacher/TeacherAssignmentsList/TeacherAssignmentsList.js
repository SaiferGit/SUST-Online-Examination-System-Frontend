import React from 'react';
import './TeacherAssignmentsList.css'
import {Link} from 'react-router-dom';

const TeacherAssignmentsList = (props) => {
    
    console.log(props.assignment.submission);
    const{title,date,status,id}=props.assignment;
    
    return (
        <div className="assignments-item d-flex justify-content-between align-items-center">
            <div>
                <h5>{title}</h5>
            </div>
            <div style={{display:'flex'}}>
                <p style={{marginRight:'55px'}}>{status}:{date}</p>
                <div class ="assignments-item-button">
                <Link to={"/teacher/assignments/"+id}><button className="submission-button" style={{backgroundColor:'#0DAA71'}}>Submissions</button></Link>
                <button className="main-button" style={{backgroundColor:'#36B3CE'}}>Edit</button>
                </div>
            </div>
        </div>
    );
};

export default TeacherAssignmentsList;