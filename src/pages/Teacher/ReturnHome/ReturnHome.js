import React from 'react';
import home from '../../../images/home.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './ReturnHome.css'
import { Link } from 'react-router-dom';
import rightArrow from '../../../images/proceed.png';

const ReturnHome = () => {
    return (
        <div className="return-home">
          <img src={home} alt="home"/>
          <h2>Exam Created</h2>
          <Link to="/teacher/dashboard">
            <button className="main-button" style={{width:'220px',height:'47px', fontSize:'large', marginTop:'25px'}}>Return to home 
            
            <img style={{marginLeft:'13px', height:'23px', width:'23px', marginTop:'-4px'}}  src={rightArrow}alt=""/> 
            
            </button>
          </Link>  
        </div>
    );
};

export default ReturnHome;