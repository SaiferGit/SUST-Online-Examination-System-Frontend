import React from 'react';
import logo from '../../../images/logo 1.png'
import {Link} from 'react-router-dom'
import TeacherSidebarList from '../../../components/Teacher/TeacherSidebarList/TeacherSidebarList';

const TeacherSidebar = () => {
    return (
        <div className="sidebar">
            <div style={{textAlign:'center'}}>
                <Link to="/teacher/dashboard"><img src={logo} alt="logo"/></Link>
                <h6>Online Examination System</h6>
            </div>
            <div>
                <TeacherSidebarList></TeacherSidebarList>
            </div>
        </div>
    );
};

export default TeacherSidebar;