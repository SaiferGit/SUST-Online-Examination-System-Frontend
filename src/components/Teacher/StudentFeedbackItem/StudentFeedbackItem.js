import React from 'react';
import './StudentFeedbackItem.css'
import ReplyIcon from '@material-ui/icons/Reply';

const StudentFeedbackItem = (props) => {
    console.log(props);
    const{img,name,reg,date,description}=props.feedback;

    return (
        <div className="student-feedback-item" style={{backgroundColor:'#FFFFFF'}}>
            <div className="student-feedback-item-header">
                <img style={{width:'50px',height:'50px', borderRadius:'50%', marginRight:'8px'}} src={img} alt={name}/>
                {/* <h4>{name}</h4> */}
                <h5>{reg}</h5>
            </div>
            <div style={{textAlign:"justify", marginLeft:"13px"}}>
                <p>{description}</p>
            </div>
            <div style={{marginLeft:'13px', marginTop:'20px'}} className="d-flex justify-content-between">
                 <h5 style={{marginTop:'12px', color:'#7e5692'}}>{date}</h5>
                <button className="main-button" style={{color:'black',backgroundColor:'#f2e4f9',fontSize:'20px',height:'45px', width:'140px'}}>Reply <ReplyIcon style={{marginLeft:'10px'}} /></button>
            </div>
        </div>
    );
};

export default StudentFeedbackItem;