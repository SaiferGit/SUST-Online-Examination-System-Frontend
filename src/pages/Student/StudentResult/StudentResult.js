import React from 'react';
import fakeResult from '../../../fakeResult';
import StudentResultItem from '../../../components/StudentResultItem/StudentResultItem';

const StudentResult = () => {
    return (
        <div>
            <div style={{width:'70vw',margin:'7vh 10px 20px 2vw'}}>
                <h3 style={{marginBottom:'20px', color: '#3b4c6b', fontWeight: 'bold'}}>Results</h3>
                {
                    fakeResult.map(res=><StudentResultItem key={res.id} result={res}></StudentResultItem>)
                }
            </div>
        </div>
    );
};

export default StudentResult;