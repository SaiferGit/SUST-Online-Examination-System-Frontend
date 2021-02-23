import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeResult from '../../fakeResult';
import './StudentResultItemDetail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StudentResultQuestion from './StudentResultQuestion';
import './StudentResultItemDetail.css'

const StudentResultItemDetail = () => {
    const {examId}=useParams();

    let total=0;

    for(let i=0;i<fakeResult.length;i++){
        total=parseInt(fakeResult[i].gainMarks)+total;
    }
    const averageMarks=total/(fakeResult.length+1)
    console.log(total);

    const exastingExamResult=fakeResult.find(res=>res.id===examId);
    const {title,gainMarks,questions}=exastingExamResult;

    return (
        <div>
            <div style={{width:'70vw',margin:'5vh 10px 20px 0.65vw', position:'relative'}}>
                <div style={{display:'flex', position:'absolute'}}>
                <Link to="/student/results"><label><ArrowBackIcon style={{ fontSize: 45,marginRight:'10px',cursor:'pointer', color:'#000'}}/></label></Link>
                    <h4 style={{fontWeight:'550', fontSize:30, marginTop:'4px', marginLeft:'1vw'}}>{title}</h4>
                </div>
               <br/>
               <br/>
               <br/>
                <div style={{display:'flex', marginLeft:'1.75vw'}}>
                    <div className="marks-box d-flex justify-content-between align-items-center">
                        <h5 style={{fontSize:22}}>Average Marks </h5>
                        <h1>{averageMarks}</h1>
                    </div>
                    <div className="marks-box d-flex justify-content-between align-items-center" style={{marginLeft:'20px'}}>
                        <h5>You've got </h5>
                        <h1>{gainMarks}</h1>
                    </div>
                </div>
                <div  style={{marginLeft:'3.9vw', marginTop:'2vh'}}>
                    <h3 style={{fontSize:25, marginBottom:'2vh'}}>Question-wise stat</h3>
                    {
                        questions.map((item,index)=><StudentResultQuestion question={item} index={index}></StudentResultQuestion>)
                    }
                </div>
            </div>
        </div>
    );
};

export default StudentResultItemDetail;