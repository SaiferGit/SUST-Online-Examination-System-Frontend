import React from 'react';
import { Link } from 'react-router-dom';
import './StudentAssignmentItem.css'

const StudentAssignmentItem = (props) => {
    const{title,date,status,id}=props.assignment;

    return (
        <div className="ml-3 assignments-item d-flex justify-content-between align-items-center">
        <div>
            <h5>{title}</h5>
        </div>
        <div style={{display:'flex'}}>
            <p style={{marginRight:'20px'}}>{status}:{date}</p>
            <div>
            <Link to={"/student/assignments/"+id}><button className="main-button" style={{backgroundColor:'#0DAA71', marginTop:'5px'}}>Submit</button></Link>
            </div>
        </div>
    </div>
    );
};

export default StudentAssignmentItem;