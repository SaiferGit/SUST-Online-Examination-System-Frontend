import React from 'react';
import AllExamList from '../../../components/Teacher/AllExamList/AllExamList';
import fakeExam from '../../../fakeExam'
import {Link} from 'react-router-dom';

const AllExam = () => {
    return (
        <div style={{margin:'5vw 10px 2vw 2vw',width:'70vw'}}>
            <div className="exam-item justify-content-between">

                <div style={{float:'right',marginBottom:'40px'}}>
                    <Link to="/teacher/createexam">
                        <button style={{width:'250px',height:'50px',marginRight:'1vw', fontSize:'large'}} className="main-button">Create a new exam</button></Link>
                </div>
                <div style={{marginLeft:'2%'}}>
                    <AllExamList exam={fakeExam}></AllExamList>
                </div>
            </div>
        </div>
    );
};

export default AllExam;