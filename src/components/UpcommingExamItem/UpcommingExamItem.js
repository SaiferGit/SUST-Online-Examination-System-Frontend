import React from 'react';
import './UpcommingExamItem.css'

const UpcommingExam = (props) => {
    console.log(props);
    const{title,date,time}=props.exam;
    return (
        <div className="exam-item d-flex justify-content-between">
            <h4 style={{marginTop:''}}>{title}</h4>
            <div className="upcomming-exam-item-date-time">
                {time},{date}
            </div>
        </div>
    );
};

export default UpcommingExam;