import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StudentAssignmentSubmit from './components/StudentAssignmentSubmit/StudentAssignmentSubmit';
import StudentResultItemDetail from './components/StudentResultItemDetail/StudentResultItemDetail';
import AllExamItemDetail from './components/Teacher/AllExamItemDetail/AllExamItemDetail';
import TeacherResultItem from './components/Teacher/TeacherResultItem/TeacherResultItem';
import Auth from './pages/Auth/Auth';
import StudentAssignment from './pages/Student/StudentAssignment/StudentAssignment';
import StudentDashboard from './pages/Student/StudentDashboard/StudentDashboard';
import StudentMyExam from './pages/Student/StudentMyExam/StudentMyExam';
import StudentResult from './pages/Student/StudentResult/StudentResult';
import AllExam from './pages/Teacher/AllExam/AllExam';
import AssignmentSubmission from './pages/Teacher/AssignmentSubmission/AssignmentSubmission';
import CreateExam from './pages/Teacher/CreateExam/CreateExam';
import StudentFeedbacks from './pages/Teacher/StudentFeedbacks/StudentFeedbacks';
import TeacherAssignments from './pages/Teacher/TeacherAssignments/TeacherAssignments';
import TeacherDashboard from './pages/Teacher/TeacherDashboard/TeacherDashboard';
import TeacherResult from './pages/Teacher/TeacherResult/TeacherResult';
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from './pages/Sidebar/Sidebar';
import CreateAssignment from './pages/Teacher/CreateAssignment/CreateAssignment';
import User from './components/User/User';
import RunningExam from './pages/Student/RunningExam/RunningExam';

// Changing app page color
document.body.style = 'background: #FAFAFA;';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Auth></Auth>
        </Route>
        <Route path="/student/runningexam">
          <RunningExam></RunningExam>
        </Route>
        <div style={{display:'flex'}}>
          <div>
            <Sidebar></Sidebar>
          </div>
          <div>
            <User></User>
            <br/>
            <br/>
            <Route path="/student/dashboard">
              <StudentDashboard></StudentDashboard>
            </Route>
            <Route path="/student/myexams">
              <StudentMyExam></StudentMyExam>
            </Route>
            <Route path="/student/results" exact>
              <StudentResult></StudentResult>
            </Route>
            <Route path="/student/results/:examId">
              <StudentResultItemDetail></StudentResultItemDetail>
            </Route>
            <Route path="/student/assignments" exact>
              <StudentAssignment></StudentAssignment>
            </Route>
            <Route path="/student/assignments/:assignmentId"> 
              <StudentAssignmentSubmit></StudentAssignmentSubmit>
            </Route>
            <Route path="/teacher/dashboard">
              <TeacherDashboard></TeacherDashboard>
            </Route>
            <Route path="/teacher/allexam" exact>
              <AllExam></AllExam>
            </Route>
            <Route path="/teacher/allexam/:examId">
              <AllExamItemDetail></AllExamItemDetail>
            </Route>
            <Route path="/teacher/results" exact>
              <TeacherResult></TeacherResult>
            </Route>
            <Route path="/teacher/results/:resultId">
              <TeacherResultItem></TeacherResultItem>
            </Route>
            <Route path="/teacher/assignments" exact>
              <TeacherAssignments></TeacherAssignments>
            </Route>
            <Route path="/teacher/assignments/:assignmentId">
              <AssignmentSubmission></AssignmentSubmission>
            </Route>
            <Route path="/teacher/studentfeedbacks">
              <StudentFeedbacks></StudentFeedbacks>
            </Route>
            <Route path="/teacher/createexam" exact>
              <CreateExam></CreateExam>
            </Route>
            <Route path="/teacher/createassignment">
              <CreateAssignment></CreateAssignment>
            </Route>
            
          </div>
        </div>
          
      </Switch>
    </Router>
  );
};

export default App;