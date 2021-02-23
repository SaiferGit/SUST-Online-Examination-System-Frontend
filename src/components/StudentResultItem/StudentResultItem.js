import React from 'react';
import { Link } from 'react-router-dom';
import './StudentResultItem.css'


const StudentResultItem = (props) => {
    const{title,date,gainMarks,totalMarks,id}=props.result;

    return (
        <div className="assignments-item mb-4 d-flex justify-content-between align-items-center">
            <div>
                <h4>{title}</h4>
            </div>
            <div style={{display:'flex'}}>
                <p style={{marginRight:'60px'}}>{date}</p>
                <h2 style={{marginRight:'60px'}}>{gainMarks}<span style={{fontSize:'18px'}}>/{totalMarks}</span></h2>
                <Link to={"/student/results/"+id}><button className="main-button mt-2">Details</button></Link>
            </div>
        </div>
    );
};

export default StudentResultItem;