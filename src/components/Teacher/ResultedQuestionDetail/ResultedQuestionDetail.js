import React from 'react';

const ResultedQuestionDetail = (props) => {
    const{name,avgTime,rightAns,wrongAns}=props.question;
    return (
        <div style={{padding:'5px 10px',marginTop:'20px', height:'80px'}} className="assignments-item d-flex justify-content-between align-items-center">
            <div style={{marginLeft:'2%'}}>
                <p>{props.index+1}. {name}</p>
            </div>
            <div style={{display:'flex'}}>
                <div style={{marginRight:'40px', textAlign:'center'}}>
                    <h2 style={{color:'#3DAAD9', marginTop:'22px'}}>{avgTime}<span>s</span></h2>
                    <p style={{marginTop:'-12px'}}><small>Avg. time spent</small></p>
                </div>
                <div style={{marginRight:'40px',textAlign:'center'}}>
                    <h2 style={{color:'#0DAA71', marginTop:'22px'}}>{rightAns}</h2>
                    <p style={{marginTop:'-12px'}}><small>Right Answers</small></p>
                </div>
                <div style={{marginRight:'40px',textAlign:'center'}}>
                    <h2 style={{color:'#F74D4D', marginTop:'22px'}}>{wrongAns}</h2>
                    <p style={{marginTop:'-12px'}}><small>Wrong Answers</small></p>
                </div>
            </div>
            
        </div>
    );
};

export default ResultedQuestionDetail;