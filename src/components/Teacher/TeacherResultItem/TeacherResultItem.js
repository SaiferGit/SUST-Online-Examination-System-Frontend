import React from 'react';
import { Link, useParams } from 'react-router-dom';
import teacherResult from '../../../TeacherData/TeacherFakeResult.js'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ResultedQuestionDetail from '../ResultedQuestionDetail/ResultedQuestionDetail.js';

const TeacherResultItem = () => {
    const{resultId}=useParams();
    const exastingResult=teacherResult.find(res=>res.id===resultId);
    const{title,aveMarks,heightMarks,particitants,questions}=exastingResult;

    console.log(exastingResult.questions);
    return (
        <div style={{width:'70vw', position:'relative',marginTop:'45px', marginLeft:'0.25vw'}}>
            <div style={{display:'flex', position:'absolute', marginTop:'0px', width:'65vw'}}>
            <Link to="/teacher/results"><label><ArrowBackIcon style={{ fontSize: 50, marginRight:'10px',cursor:'pointer', color:'black' }}/></label></Link>
                <h2 style={{marginTop:'5px', marginLeft:'1vw', fontWeight:'600'}}>{title}</h2>
            </div>
            <br/>
            <br/>
            <div style={{display:'flex', marginLeft:'4vw', width:'68.5vw'}}>
                <div className="box d-flex justify-content-between">
                    <h5 class="align-top mt-4 ml-2.6">Average Mark</h5>
                    <h1 style={{color:'rgba(113, 0, 167, 0.8)', fontSize:80, marginRight:'-20px', marginTop:'75px'}}>{aveMarks}</h1>
                </div>
                <div className="box d-flex justify-content-between">
                    <h5 class="align-top mt-4 ml-2.6">Participants</h5>
                    <h1 style={{color:'rgba(113, 0, 167, 0.8)', fontSize:80, marginRight:'-20px', marginTop:'75px'}}>{particitants}</h1>
                </div>
                <div className="box d-flex justify-content-between">
                    <h5 class="align-top mt-4 ml-2.6">Height Marks</h5>
                    <h1 style={{color:'rgba(113, 0, 167, 0.8)', fontSize:80, marginRight:'-20px', marginTop:'75px'}}>{heightMarks}</h1>
                </div>
                
            </div>
            <div style={{marginLeft:'4.25vw', width:'68vw'}}>
                <h3 style={{marginBottom:'25px'}}>Question-wise Stat</h3>
                {
                    questions.map((item,index)=><ResultedQuestionDetail index={index} question={item}></ResultedQuestionDetail>)
                }
            </div>
        </div>
    );
};

export default TeacherResultItem;