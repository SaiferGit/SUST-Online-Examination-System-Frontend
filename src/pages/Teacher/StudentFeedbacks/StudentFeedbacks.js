import React from 'react';
import StudentFeedbackItem from '../../../components/Teacher/StudentFeedbackItem/StudentFeedbackItem';
import studentFeedbacksData from '../../../TeacherData/fakeStudentFeedbacks'; 
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import './StudentFeedbacks.css';


const StudentFeedbacks = () => {
    console.log(studentFeedbacksData);
    return (
        <div style={{marginLeft:'2vw', marginTop:'40px', width:'70vw'}}>
            <h2>Student Feedbacks</h2>
            <div>
                {/* <input style={{height:'45px', width:'400px',margin:'20px 0px', marginBottom:'30px', backgroundColor:'#d8d8d8', borderRadius:'10px', fontSize:'large'}} className="form-control" placeholder="Search" type="text"/> */}

                <input id="searchID" placeholder="Search"/>

            </div>
            {
                studentFeedbacksData.map(feedback=><StudentFeedbackItem key={feedback.id} feedback={feedback} ></StudentFeedbackItem>)
            }
        </div>
    );
};

export default StudentFeedbacks;