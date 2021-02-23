import React from 'react';
import StudentMyExamList from '../../../components/StudentMyExamList/StudentMyExamList'
import fakeExam from '../../../fakeExam';
import './StudentMyExam.css'

const StudentMyExam = () => {
    return (
        <div className="student-exam-container">
            <div class="examtable" style={{margin:'10vh 10px 20px 2vw',width:'70vw'}}>
                <StudentMyExamList exam={fakeExam}></StudentMyExamList>
            </div>
        </div>
    );
};

export default StudentMyExam;