import React from 'react';
import './sidebar.css'
import logo from '../../images/logo 1.png'
import StudentSidebar from '../../components/Sidebar/StudentSidebar';
import TeacherSidebarList from '../../components/Teacher/TeacherSidebarList/TeacherSidebarList';

const Sidebar = () => {
    const user = localStorage.getItem('user');
    console.log(user);
    return (
        <div className="sidebar">
            <div style={{textAlign:'center'}}>
               <img src={logo} alt="logo"/>
               <br/>
                <h6>Online Examination System</h6>
            </div>
            <div>
                {
                    user==='student' ? <StudentSidebar></StudentSidebar>
                    : <TeacherSidebarList></TeacherSidebarList>
                }
            </div>
        </div>
    );
};

export default Sidebar;