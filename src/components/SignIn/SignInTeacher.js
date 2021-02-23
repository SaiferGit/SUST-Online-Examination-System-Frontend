import React from 'react';
import { Form } from 'react-bootstrap';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import './SignIn.css';
import rightArrow from '../../images/proceed.png';


const SignInStudent = () => {

    const handleSubmit=()=>{
        window.location.pathname='/teacher/dashboard';
    }
    return (
        <div class="formClass">
             <form>
                <label style={{color:'purple'}}>Email</label>
                <br/>
                <input class= "inputBox" type="text" style={{width:'400px'}} placeholder="someone@sust.edu"/>
                <br/>
                <br/>
                <label  style={{color:'purple'}}>Password</label>
                <input class= "inputBox" style={{width:'400px',marginBottom:'20px'}} type="password" placeholder="********"/>
                <br/>

                <Link to="/teacher/dashboard"><button style={{height:'45px', width:'150px', fontSize:'large'}} className="main-button" >Proceed  
                <img style={{marginLeft:'7px', height:'23px', width:'23px', marginTop:'-4px'}}  src={rightArrow}alt=""/>
                </button></Link>
                <p style={{color:'#49006B',marginTop:'20px'}}><strong>Forgot Password?</strong></p>
            </form>
        </div>
    );
};

export default SignInStudent;