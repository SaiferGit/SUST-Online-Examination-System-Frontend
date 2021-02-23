import React from 'react';

const StudentResultQuestion = (props) => {
    const{name,time}=props.question;

    return (
        <div style={{padding:'5px 10px',marginTop:'20px'}} className="assignments-item d-flex justify-content-between align-items-center">
            <div>
                <p>{props.index+1}. {name}</p>
            </div>
            <div style={{marginRight:'3%', textAlign:'center', marginTop:'1%'}}>
                <h3 style={{color:'#3DAAD9', fontSize:35}}>{time}<span>s</span></h3>
                <p style={{marginTop:'-15%', fontSize:'bold'}}><small>Time Spent</small></p>
            </div>
        </div>
    );
};

export default StudentResultQuestion;