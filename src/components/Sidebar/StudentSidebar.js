import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './StudentSidebar.css'
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PollIcon from '@material-ui/icons/Poll';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ClassIcon from '@material-ui/icons/Class';

const StudentSidebar = () => {
    const[activePage,setActivePage]=useState({
        dashboard:true,
        myExam:false,
        result:false,
        assignment:false
    })
    console.log(activePage);

    const[pages,setPase]=useState({
        dashboard:'dashboard',
        myExam:'myexams',
        result:'results',
        assignment:'assignments'
    })

    const dashboard='dashboard';
    const{active}=useParams();
    console.log(useParams());

    const handleDashbord=()=>{
        const newActive={...activePage};
        newActive.dashboard=true;
        newActive.myExam=false;
        newActive.result=false;
        newActive.assignment=false;
        setActivePage(newActive);
    }
    const handleMyExam=()=>{
        const newActive={...activePage};
        newActive.dashboard=false;
        newActive.myExam=true;
        newActive.result=false;
        newActive.assignment=false;
        setActivePage(newActive);
    }
    const handleResult=()=>{
        const newActive={...activePage};
        newActive.dashboard=false;
        newActive.myExam=false;
        newActive.result=true;
        newActive.assignment=false;
        setActivePage(newActive);
    }
    const handleAssigntment=()=>{
        const newActive={...activePage};
        newActive.dashboard=false;
        newActive.myExam=false;
        newActive.result=false;
        newActive.assignment=true;
        setActivePage(newActive);
    }

    return (
        <div className="sidebar-list">
            <ul>
                <li className={activePage.dashboard && 'activePage'}><Link to={"/student/"+pages.dashboard} onClick={handleDashbord}><DashboardRoundedIcon style={{ fontSize: 30}}/> Dashboard</Link></li>

                <li className={activePage.myExam && 'activePage'}><Link to={"/student/"+pages.myExam} onClick={handleMyExam}><AssignmentTurnedInIcon style={{ fontSize: 30}}/>My Exams</Link></li>
                
                <li className={activePage.result && 'activePage'}><Link to={"/student/"+pages.result} onClick={handleResult}><PollIcon style={{ fontSize: 30}}/> Results</Link></li>
                
                <li className={activePage.assignment && 'activePage'}><Link to={"/student/"+pages.assignment} onClick={handleAssigntment}><ClassIcon style={{ fontSize: 30}}/> Assignments</Link></li>
            </ul>
        </div>
    );
};

export default StudentSidebar;