import React, { useState } from 'react';
import fakeStudentAssignment from '../../../fakeStudentAssignment';
import StudentAssignmentItem from '../../../components/StudentAssignmentItem/StudentAssignmentItem';
import { Link } from 'react-router-dom';
import './StudentAssignment.css';

const StudentAssignment = () => {
    const[assignmentType,setAssignmentsType]=useState('due');

    const handleDue=()=>{
        setAssignmentsType('due')
    }
    const handleComplete=()=>{
        setAssignmentsType('finished')
    }

    const exastingAssignments=fakeStudentAssignment.filter(assignment=>assignment.status===assignmentType);
    
    return (
        <div>
            <div style={{margin:'7vh 10px 20px 2vw',width:'70vw'}}>
                <h3>Assignments</h3>
                
                <div style={{marginTop:'20px', marginLeft:'-20px'}} className="selection-button">
                <div class="text" style={{display:'flex'}}>
                    <Link onClick={handleDue} className={assignmentType==='due' && 'active-item'}>Due Assignments</Link>
                    <Link onClick={handleComplete} className={assignmentType==='finished' && 'active-item'}>Completed Assignments</Link>
                </div>
                {
                    exastingAssignments.map(assignment=><StudentAssignmentItem key={assignment.id} assignment={assignment}></StudentAssignmentItem>)
                }
            </div>
            </div>
        </div>
    );
};

export default StudentAssignment;