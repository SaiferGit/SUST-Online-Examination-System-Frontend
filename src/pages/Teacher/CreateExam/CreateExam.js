import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import AddQuestion from '../AddQuestion/AddQuestion';
import './CreateExam.css'
import rightArrow from '../../../images/proceed.png';


const CreateExam = () => {

    const [startDate, setStartDate] = useState(new Date());
    const[hide,setHide]=useState(false);

    const handleHide=()=>{
        setHide(true);
    }

    console.log(hide);
    return (
        <div style={{width:'700px',margin:'2vw', marginTop:'-70px'}} >
            <div className={hide && 'hide'}>
                <h3 style={{fontWeight:550, fontSize:30}}>Create a new exam</h3>
                <br/>
                <form>
                    <div className="form-group">
                        <label style={{color:'#49006b'}}>Title</label>
                        <input style={{marginTop:'-7px'}} type="text" placeholder="Exam title"/>
                    </div>
                    <div className="form-group">
                        <label  class="labelText" >Description</label>
                        <textarea style={{marginTop:'-7px'}} rows="5"></textarea>
                    </div>
                    <label style={{marginTop:'-7px'}}  class="labelText">Date & Time</label>
                        
                    <div style={{marginTop:'-7px'}}>
                        <DatePicker style={{marginTop:'-7px'}}
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            timeInputLabel="Time:"
                            dateFormat="MM/dd/yyyy h:mm aa"
                            showTimeInput
                            />
                    </div>
                    <div >
                        <label style={{marginTop:'20px'}}  class="labelText">Select Audiance</label>
                        <div style={{marginTop:'-7px'}}  className="form-inline">

                            <select  name="cars" style={{width:'220px'}}>
                                <option value="Department">Department</option>
                                <option value="EEE">EEE</option>
                                <option value="CSE">CSE</option>
                                <option value="IPE">IPE</option>
                                <option value="ChE">ChE</option>
                            </select>
                            <select  name="Semester" style={{marginLeft:'20px',width:'220px'}}>
                                <option value="Semister">Semester</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                                <option value="3rd">3rd</option>
                                <option value="4nd">4nd</option>
                            </select>
                            <select  name="cars" style={{marginLeft:'20px',width:'220px'}}>
                                <option value="Course">Course</option>
                                <option value="CSE-1001">CSE-1001</option>
                                <option value="CSE-1002">CSE-1002</option>
                                <option value="CSE-1003">CSE-1003</option>
                            </select>
                        </div>
                    </div>
                    <div >
                        <label style={{marginTop:'20px'}}  class="labelText">Password</label>
                        <input style={{marginTop:'-7px'}}type="password" placeholder="Must have at least 6 characters"/>
                    </div>
                </form>
                <br/>
                <button className="main-button" style={{width:'140px',height:'47px', fontSize:'large', marginTop:'25px'}} onClick={handleHide}>Next     <img style={{marginLeft:'7px', height:'23px', width:'23px', marginTop:'-4px'}}  src={rightArrow}alt=""/> 
                </button>
            </div>
            <div className={!hide && 'hide'}>
                <AddQuestion></AddQuestion>
            </div>
        </div>
    );
};

export default CreateExam;

