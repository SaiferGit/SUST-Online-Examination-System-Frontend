import React from 'react';
import './ExamParticipant.css';
const ExamParticipant = (props) => {
    const reg=props.reg;
    return (
        <div className="exam-participant-item">
            <div style={{ paddingTop:'14px', paddingRight:'10px'}}>
                <p>{reg}</p>
            </div>
            <div style={{paddingBottom:'20px'}}>
                <button className="main-button" style={{width:'110px', backgroundColor:'#0DAA71',borderRadius:'6px',fontSize:'15px', marginRight:'10px'}}>Answers</button>
                <button className="main-button" style={{width:'80px', backgroundColor:'#F74D4D',marginLeft:'5px',borderRadius:'6px',fontSize:'15px'}}>Block</button>
            </div>
        </div>
    );
};

export default ExamParticipant;