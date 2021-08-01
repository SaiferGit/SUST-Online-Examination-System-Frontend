import React from 'react';
import TeacherResultList from '../../../components/Teacher/TeacherResultList/TeacherResultList';
import teacherFakeResult from '../../../TeacherData/TeacherFakeResult'
import './TeacherResult.css';
const TeacherResult = () => {
    console.log(teacherFakeResult);
    return (
        <div class="allexamclass">
            
            <div style={{marginLeft:'2%', marginTop:'40px', paddingLeft:'50px'}} className="exam-item justify-content-between">
                <TeacherResultList result={teacherFakeResult}>
                    
                </TeacherResultList>
            </div>

            
        </div>
    );
};

export default TeacherResult;