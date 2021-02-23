import React from 'react';
import './User.css'
import teacher from '../../../src/images/teacher.jpg'
import student from '../../../src/images/student.jpg'

const User = () => {
    const user = localStorage.getItem('user');

    return (
        <div style={{float:'right',marginTop:'10px', marginLeft:'65vw'}}>
            {
                user==='student' ? 
                <div className="user" style={{display:'flex'}}>
                    <h6>Student</h6>
                    <img src={student} alt=""/>
                </div>
                : <div className="user" style={{display:'flex'}}>
                    <h6>Teacher</h6>
                    <img src={teacher} alt=""/>
                </div>
            }
        </div>
    );
};

export default User;