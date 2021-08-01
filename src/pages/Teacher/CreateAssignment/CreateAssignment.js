import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import rightArrow from '../../../images/proceed.png';
import './CreateAssignment.css'
const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div style={{width:'700px',margin:'2vw', marginTop:'-50px'}} >
            <div>
                <h3 style={{fontWeight:550, fontSize:30}}>Create a new assignment</h3>
                <br/>
                <form>
                    <div className="form-group">
                        <label style={{color:'#49006b'}}>Title</label>
                        <input style={{marginTop:'-7px'}} type="title" placeholder="Assignment Title"/>
                    </div>
                    <div className="form-group">
                        <label class="labelText">Instructions of Students</label>
                        <textarea style={{marginTop:'-7px'}} rows="5"></textarea>
                    </div>
                    <div>
                        <label style={{marginTop:'-7px', marginBottom:'-7px'}}  class="labelText">Deadline</label>
                        <div style={{width:'700px'}}>
                            <DatePicker style={{marginTop:'-15px'}}
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                timeInputLabel="Time:"
                                dateFormat="MM/dd/yyyy h:mm aa"
                                showTimeInput
                                />
                        </div>
                    </div>
                    <div >
                        <label style={{marginTop:'20px'}}  class="labelText">Select Audiance</label>
                        <div style={{marginTop:'-7px'}} className="form-inline">
                            <select   name="cars" style={{width:'220px'}}>
                                <option value="Department">Department</option>
                                <option value="EEE">EEE</option>
                                <option value="CSE">CSE</option>
                                <option value="IPE">IPE</option>
                                <option value="ChE">ChE</option>
                            </select>
                            <select  name="cars" style={{marginLeft:'20px',width:'220px'}}>
                                <option value="semester">Semester</option>
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
                </form>
                <br/>
                <Link to="/teacher/assignments">
                    <button className="main-button" style={{width:'140px',height:'47px', fontSize:'large', marginTop:'25px'}} >Submit 
                    <img style={{marginLeft:'7px', height:'23px', width:'23px', marginTop:'-4px'}}  src={rightArrow}alt=""/> 
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CreateAssignment;