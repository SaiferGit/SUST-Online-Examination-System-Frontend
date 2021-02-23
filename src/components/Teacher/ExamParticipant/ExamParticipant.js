import React from 'react';

const ExamParticipant = (props) => {
    const reg=props.reg;
    return (
        <div className="d-flex justify-content-between" style={{width:'65vw',margin:'20px 10px 5px 40px',borderBottom:'0.1px solid rgb(206, 202, 202)'}}>
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