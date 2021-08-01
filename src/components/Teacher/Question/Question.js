import React from 'react';
import { Link } from 'react-router-dom';
import './Question.css'


const Question = () => {
    return (
        <div className="question">
            <div style={{marginLeft:'15px'}} className="form-group">
                <input style={{width:'100%'}} type="text" placeholder="Question"/>
            </div>
            <h5  style={{marginLeft:'15px', color:'#000'}}>Select answer type</h5>
            <div className="select-answer-type" style={{width:'550px', marginLeft:'15px', marginTop:'-3px'}}>
                <Link style={{backgroundColor:'purple', color:'white', background:'purple', padding:'12px'}}>MCQ</Link>
                <Link style={{marginLeft:'20px',padding:'10px',color:'purple'}}>Written</Link>
                <Link style={{marginLeft:'20px',borderLeft:'2px solid purple',padding:'10px',color:'purple'}}>Code</Link>
                <Link style={{marginLeft:'20px',borderLeft:'2px solid purple',padding:'10px',color:'purple'}}>Dropdown</Link>
                <Link style={{marginLeft:'20px',borderLeft:'2px solid purple',padding:'10px',color:'purple'}}>Range Selector</Link>
            </div>
            <br/>
            <div  style={{marginLeft:'15px', width:'100%'}} className="form-inline">
                <input type="text" style={{width:'24%'}} placeholder="Option A"/>
                <input type="text" style={{width:'24%',marginLeft:'10px'}} placeholder="Option B"/>
                <input type="text" style={{width:'24%',marginLeft:'10px'}}  placeholder="Option C"/>
                <input type="text" style={{width:'24%',marginLeft:'10px'}} placeholder="Option D"/>
            </div>
            <br/>
            <div className="marks-input form-inline">
                <h5 style={{ marginTop:'8px', marginLeft:'10px'}}>Mark:</h5>
                <input type="number" name="marks" defaultValue="5"/>
            </div>

            
        </div>
    );
};

export default Question;