import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PollIcon from '@material-ui/icons/Poll';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ClassIcon from '@material-ui/icons/Class';
import CommentIcon from '@material-ui/icons/Comment';
import './TeacherSidebarList.css';

const TeacherSidebarList = () => {

    const[activePage,setActivePage]=useState({
        dashboard:true,
        allexam:false,
        result:false,
        assignment:false,
        studentfeedBack:false
    })

    console.log(activePage);

    //check
    const handleDashboard=()=>{
        const newActive={...activePage};
        newActive.dashboard=true;
        newActive.allexam=false;
        newActive.result=false;
        newActive.assignment=false;
        newActive.studentfeedBack=false;
        setActivePage(newActive);
    }

    const handleResult=()=>{
        const newActive={...activePage};
        newActive.dashboard=false;
        newActive.allexam=false;
        newActive.result=true;
        newActive.assignment=false;
        newActive.studentfeedBack=false;
        setActivePage(newActive);
    }
    const handleAllExam=()=>{
        const newActive={...activePage};
        newActive.dashboard=false;
        newActive.allexam=true;
        newActive.result=false;
        newActive.assignment=false;
        newActive.studentfeedBack=false;
        setActivePage(newActive);
    }

    const handleAssignment=()=>{
        const newActive={...activePage};
        newActive.dashboard=false;
        newActive.allexam=false;
        newActive.result=false;
        newActive.assignment=true;
        newActive.studentfeedBack=false;
        setActivePage(newActive);
    }
    const handleStudentFeedback=()=>{
        const newActive={...activePage};
        newActive.dashboard=false;
        newActive.allexam=false;
        newActive.result=false;
        newActive.assignment=false;
        newActive.studentfeedBack=true;
        setActivePage(newActive);
    }


    return (
        <div className="sidebar-list">
            <ul>
               <li className={activePage.dashboard && 'activePage'}><Link to="/teacher/dashboard" onClick={handleDashboard}><DashboardRoundedIcon style={{ fontSize: 30}}/> Dashboard</Link></li>
               <li className={activePage.allexam && 'activePage'}><Link to={"/teacher/allexam"} onClick={handleAllExam}><ClassIcon style={{ fontSize: 30}}/> All Exam</Link></li>
               <li className={activePage.result && 'activePage'}><Link to={"/teacher/results"} onClick={handleResult}><PollIcon style={{ fontSize: 30}}/> Results</Link></li>
               <li className={activePage.assignment && 'activePage'}><Link to={"/teacher/assignments"} onClick={handleAssignment}><AssignmentTurnedInIcon style={{ fontSize: 30}}/> Assignments</Link></li>
               <li className={activePage.studentfeedBack && 'activePage'}><Link to={"/teacher/studentfeedbacks"} onClick={handleStudentFeedback}><CommentIcon style={{ fontSize: 30}}/> Student Feedbacks</Link></li>
            </ul>
        </div>
    );
};

export default TeacherSidebarList;