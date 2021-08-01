import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './AllExamItemDetail.css'
import fakeExam from '../../../fakeExam';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExamParticipant from '../ExamParticipant/ExamParticipant';

const AllExamItemDetail = () => {
    const{examId}=useParams();
    const exastingExam=fakeExam.find(exam=>exam.id===examId);
    const{title,time,status,description}=exastingExam;
    const[selcectionItems,setSelectionItems]=useState('participant');

    console.log(exastingExam.participants.reg);
    const handleParticipant=()=>{
        setSelectionItems('participant')
    }
    const handleQuestion=()=>{
        setSelectionItems('question')
    }

    return (
        <div className="allexam-item-detail">
            <div style={{display:'flex', position:'absolute'}}>
                <Link to="/teacher/allexam"><label><ArrowBackIcon className={"allexam-arrowicon"} style={{fontSize:45}}/></label></Link>
                <h3 style={{marginTop:'7px', width:'60vw', marginLeft:'0.5vw'}}>{title}</h3>
            </div>
            <br/>
            <br/>
            <div class={"allexam-time-button"}>
                <h5 style={{color:'#7f21aa'}}>{status} {time}</h5>
                <br/>
                <p class={"descriptioncls"} style={{marginTop:'-10px', textAlign:"justify"}}>{description}</p>
                <br/>
                <button className="main-button" >Copy Link</button>
                <button className="main-button">Edit</button>
            </div>
            <div style={{marginLeft:'2.7vw', marginTop:'10px'}} className="selection-button">
                    <Link  onClick={handleParticipant} className={selcectionItems==='participant' && 'active-item'}>Participants</Link>
                    <Link onClick={handleQuestion} className={selcectionItems==='question' && 'active-item'}>Questions</Link>
                </div>
                <div class={"exam-participant"}>
                    {
                        selcectionItems==='participant' ?
                        exastingExam.participants.reg.map(reg=><ExamParticipant reg={reg}></ExamParticipant>)
                        : <p style={{margin:'20px 40px'}}>Not uploading</p>
                    }
                    
            </div>
        </div>
    );
};

export default AllExamItemDetail;