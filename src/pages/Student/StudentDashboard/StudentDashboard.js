import React from 'react';
import './StudentDashboard.css'
import fakeExam from '../../../fakeExam';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import UpcommingExamItem from '../../../components/UpcommingExamItem/UpcommingExamItem'
import rightArrow from '../../../images/proceed.png';
import { Link } from 'react-router-dom';
const StudentDashboard = () => {

    return (
        <div className="dashboard-container">
            <div className="dashboard-items">
                <div className="dashboard-next-exam d-flex justify-content-between">
                    <div>
                        <h6>Next Exam</h6>
                        <h3>CSE133 Term Test1</h3>
                    </div>
                    <div style={{display:'flex'}}>
                        <h1 style={{color:'white',marginRight:'20px'}}>12:00AM</h1>

                        <Link to="/student/runningexam">
                            <button className="main-button">Enter Now <img style={{height:'20px', width:'20px', marginTop:'-2px'}}  src={rightArrow}alt=""/>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="dashboard-upcomming-exam">
                    <h4>UpComing Exams</h4>
                    {
                        fakeExam.map(ex=><UpcommingExamItem key={ex.id} exam={ex}></UpcommingExamItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;