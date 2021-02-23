import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './TeacherDashboard.css'
import fakeExam from '../../../fakeExam';
import UpcommingExam from '../../../components/UpcommingExamItem/UpcommingExamItem';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import createExamIcon from '../../../images/createexamicon.png';
import rightArrow from '../../../images/proceed.png';
import {Link} from 'react-router-dom'

const TeacherDashboard = () => {

    const runningExam=fakeExam.find(exam=>exam.status==='Running');

    console.log(runningExam);
    return (
        <div style={{width:'70vw'}}>
                <div className="dashboard-next-exam d-flex justify-content-between">
                    <div>
                        <h6>{runningExam.status} Now</h6>
                        <h3 style={{fontWeight:'700'}}>{runningExam.title}</h3>
                    </div>
                    <div>
                        <Link to={"/teacher/allexam/"+runningExam.id}><button className="main-button">See More 
                        <img style={{marginLeft:'7px', height:'25px', width:'25px'}}  src={rightArrow}alt=""/></button></Link>
                    </div>
                </div>
                <h4 style={{marginLeft:'2vw'}}>At a glance</h4>
                <div className="dashboard-box">
                    <Link to="/teacher/createexam">
                        <div className="box d-flex justify-content-between align-items-center">
                            <h5>Create a new exam</h5>
                            <img style={{marginBottom:'-12%', height:'80px', width:'80px'}}  src={createExamIcon}alt=""/>
                        </div>
                    </Link>
                    <Link to="/teacher/allexam">
                        <div className="box d-flex justify-content-between align-items-center">
                            <h5>Exam Taken</h5>
                            <h1 style={{marginBottom:'-14%', fontSize:'80px', color:'#3daad9'}}>22</h1>
                        </div>
                    </Link>
                    <Link to="/teacher/assignments">
                        <div className="box d-flex justify-content-between align-items-center">
                            <h5>Assignments</h5>
                            <h1 style={{marginBottom:'-14%', fontSize:'80px', color:'#0daa71'}}>13</h1>
                        </div>
                    </Link>
                </div>
                <div style={{marginLeft:'2vw'}}>
                    <h4 style={{fontWeight:'550', fontSize:'27px'}}>Next exams</h4>
                    {
                        fakeExam.map(exam=><UpcommingExam key={exam.id} exam={exam}></UpcommingExam>)
                    }
                </div>
            </div>
    );
};

export default TeacherDashboard;