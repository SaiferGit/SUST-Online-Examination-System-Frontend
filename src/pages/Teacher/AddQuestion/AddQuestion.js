import React, { useState } from 'react';
import Question from '../../../components/Teacher/Question/Question';
import './AddQuestion.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ReturnHome from '../ReturnHome/ReturnHome';
import rightArrow from '../../../images/proceed.png';

const AddQuestion = () => {

    const[hide,setHide]=useState(false);

    const handleHide=()=>{
        setHide(true);
    }


    return (
        <div  style={{width:'70vw', marginTop:'150px', position:'relative', marginLeft:'1.5vw'}}>
            <div style={{position:'absolute', top:'0px', right:'0px', width:'70vw', marginRight:'1.5vw'}} className={hide && 'hide'}>
                <div class="d-block" style={{backgroundColor:'green'}}>
                    <h2 style={{fontWeight:'700', float:'left'}}>
                        Add questions
                    </h2>
                    <button class="import-button float-right">
                        Import from Question Bank
                    </button>
                </div>
                <br/>
                <br/>
                <br/>
                
                <Question></Question>
                
                <div className="add-question">
                    <h5>Add Question</h5>
                </div>
                <button className="main-button" style={{width:'140px',height:'47px', fontSize:'large', marginTop:'25px'}} onClick={handleHide}>Next     <img style={{marginLeft:'7px', height:'23px', width:'23px', marginTop:'-4px'}}  src={rightArrow}alt=""/> 
                </button>
            </div>
            <div className={!hide && 'hide'}>
                <ReturnHome></ReturnHome>
            </div>
        </div>
    );
};

export default AddQuestion;