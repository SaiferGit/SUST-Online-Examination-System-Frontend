import React, { useState } from 'react';
import './TeacherAssignments.css'
import teacherFakeAssignments from '../../../TeacherData/teacherAssignments';
import TeacherAssignmentsList from '../../../components/Teacher/TeacherAssignmentsList/TeacherAssignmentsList';
import {Link} from 'react-router-dom';

const TeacherAssignments = () => {
    const[assignmentType,setAssignmentsType]=useState('due');

    const handleDue=()=>{
        setAssignmentsType('due')
    }
    const handleComplete=()=>{
        setAssignmentsType('finished')
    }

    const exastingAssignments=teacherFakeAssignments.filter(assignment=>assignment.status===assignmentType);


    return (
        <div class={"allexamclass"}>
            <div className="assignment-create-button">
                <h1>Assignments</h1>
                <Link to="/teacher/createassignment"><button className="main-button">Create a new one</button></Link>
            </div>
            <div style={{marginTop:'20px'}} className="selection-button">
                <div style={{display:'flex', marginLeft:'-1vw'}}>
                    <Link onClick={handleDue} className={assignmentType==='due' && 'active-item'}>Due Assignments</Link>
                    <Link onClick={handleComplete} className={assignmentType==='finished' && 'active-item'}>Completed Assignments</Link>
                </div>
                {
                    exastingAssignments.map(assignment=><TeacherAssignmentsList key={assignment.id} assignment={assignment}></TeacherAssignmentsList>)
                }
            </div>
        </div>
    );
};

export default TeacherAssignments;