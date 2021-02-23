import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../../components/User/User';
import fakeExam from '../../../fakeExam';
import logo from '../../../images/logo 1.png';
import './RunningExam.css'

const RunningExam = () => {
    const runningExam=fakeExam.find(exam=>exam.status==='Running');
    console.log(runningExam);
    return (
        <div style={{width:'70vw'}}>
            <div style={{margin:'5vh', position:'relative'}} classNam="d-flex justify-content-between align-items-center">
                <div style={{float:"right", marginTop:"-45px", marginRight:"-28vw"}}>
                    <User></User>
                </div>
                <div style={{ position:'absolute', display:'flex', width:'400px', marginTop:"0px"}}>
                    <img style={{height:'55px', width:"55px"}} class="ml-2" src={logo} alt="SUST"/>
                    <h4 style={{ margin:'14px 0px 0px 15px', color:'#49006b'}}>Online Examination System</h4>
                </div>
                
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div style={{width:'70vw', marginLeft: '13vw'}}>
                <div className="d-flex justify-content-between">
                    <h3 style={{fontWeight:'700', fontSize:33}}>{runningExam.title}</h3>
                    <h2 style={{color:'#F74D4D', fontWeight:'500', fontSize:45, marginTop:'-12px'}}>20:33</h2>
                </div>
                <br/>
                <div className="running-exam-question">
                    <div>
                        <p>1. {runningExam.questions[0].title}</p>
                    <div>
                        <input style={{width:'30px'}} type="radio" name="option A"/>
                        <label style={{marginLeft:'10px'}}>{runningExam.questions[0].option[0]}</label>
                        <br/>
                        <input style={{width:'30px'}} type="radio" name="option B"/>
                        <label style={{marginLeft:'10px'}}>{runningExam.questions[0].option[1]}</label>
                        <br/>
                        <input style={{width:'30px'}} type="radio" name="option C"/>
                        <label style={{marginLeft:'10px'}}>{runningExam.questions[0].option[2]}</label>
                        <br/>
                        <input style={{width:'30px'}} type="radio" name="option D"/>
                        <label style={{marginLeft:'10px'}}>{runningExam.questions[0].option[3]}</label>
                    </div>
                    <br/>
                    <p>2. {runningExam.questions[1].title}</p>
                    <input style={{width:'400px'}} type="range" name="vol" min="0" max="400"></input>
                    <br/>
                    <p>3. {runningExam.questions[2].title}</p>
                    <textarea type="text" rows="6" cols="40" style={{width:'100%', marginLeft:'1.5%'}} ></textarea>
                    <br/>
                    <p>4. {runningExam.questions[3].title}</p>
                    <textarea type="text" rows="6" cols="40" style={{width:'100%', marginLeft:'1.5%'}} ></textarea>
                    </div>
                    <br/>
                    <div style={{textAlign:'center'}}>
                        <Link to="/student/dashboard"><button style={{width:'241px',height:'45px',backgroundColor:'rgba(73, 0, 107, 0.8)', fontSize:'large'}} className="main-button">Finish Exam</button></Link>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    );
};

export default RunningExam;