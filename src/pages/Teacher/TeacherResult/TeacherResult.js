import React from 'react';
import TeacherResultList from '../../../components/Teacher/TeacherResultList/TeacherResultList';
import teacherFakeResult from '../../../TeacherData/TeacherFakeResult'

const TeacherResult = () => {
    console.log(teacherFakeResult);
    return (
        <div style={{margin:'5vw 10px 2vw 2vw',width:'10vw'}}>
            
            <div style={{marginLeft:'2%', marginTop:'40px', paddingLeft:'50px'}} className="exam-item justify-content-between">
                <TeacherResultList result={teacherFakeResult}>
                    
                </TeacherResultList>
            </div>

            
        </div>
    );
};

export default TeacherResult;