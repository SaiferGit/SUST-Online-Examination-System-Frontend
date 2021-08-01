import React from 'react';
import AllExamList from '../../../components/Teacher/AllExamList/AllExamList';
import fakeExam from '../../../fakeExam'
import {Link} from 'react-router-dom';
import './AllExam.css';
const AllExam = () => {
    return (
        <div >
            <div class="all-exam-item justify-content-between">

                <div style={{float:'right',marginBottom:'40px'}}>
                    <Link to="/teacher/createexam">
                        <button style={{fontSize:'large', width:'220px', height: '50px'}} className="main-button">Create a new exam</button></Link>
                </div>
                <div style={{marginLeft:'2%'}}>
                    <AllExamList exam={fakeExam}></AllExamList>
                </div>
            </div>
        </div>
    );
};

export default AllExam;