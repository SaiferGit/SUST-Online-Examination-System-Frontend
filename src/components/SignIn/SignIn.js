import React, { useState } from 'react';
import SignInStudent from './SignInStudent';
import SignInTeacher from './SignInTeacher';
import './SignIn.css'

const SignIn = () => {
    const[user,setUser]=useState({
        student:true,
        teacher:false
    });
    if(user.student){
        localStorage.clear();
        localStorage.setItem('user','student');
    }
    else{
        localStorage.clear();
        localStorage.setItem('user','teacher');
    }
    const handleStudent=()=>{
        const newUser={...user};
        newUser.student=true;
        newUser.teacher=false;
        setUser(newUser);
    }
    const handleTeacher=()=>{
        const newUser={...user};
        newUser.student=false;
        newUser.teacher=true;
        setUser(newUser);
        
    }

    return (
        <div>
            <h3 className="signIn">Sign In</h3>
            <br/>
            <p className="font-color" style={{marginBottom:'2px'}}>Sign In As</p>
            <div style={{display:'flex'}}>
                <button className={user.student ? "active" : "without-active"} style={{marginRight:'20px'}} onClick={handleStudent}>Student</button>
                <button className={user.teacher ? "active" : "without-active"} onClick={handleTeacher}>Teacher</button>
            </div>
            <br/>
            <br/>
            <br/>
            {
                user.student && <SignInStudent></SignInStudent>
            }
            {
                user.teacher && <SignInTeacher></SignInTeacher>
            }
        </div>
    );
};

export default SignIn;