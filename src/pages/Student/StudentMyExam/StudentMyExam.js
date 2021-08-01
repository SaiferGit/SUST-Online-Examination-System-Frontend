import React from 'react';
import StudentMyExamList from '../../../components/StudentMyExamList/StudentMyExamList'
import fakeExam from '../../../fakeExam';
import './StudentMyExam.css'

const StudentMyExam = () => {
    return (
        <div className="student-exam-container">
            <div class="examtable">
                <StudentMyExamList exam={fakeExam}></StudentMyExamList>
            </div>
        </div>
    );
};

export default StudentMyExam;