import './App.css';
import StudentForget from './components/student/StudentForget';
import TeacherForget from './components/teacher/TeacherForget';
import TeacherLogin from './components/teacher/TeacherLogin';
import StudentLogin from './components/student/StudentLogin';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudentLogin />}></Route>
        <Route path="/teacher-login" element={<TeacherLogin />}></Route>
        <Route path="/teacher-forget" element={<TeacherForget />}></Route>
        <Route path="/student-forget" element={<StudentForget />}></Route>
      </Routes>
      2024 @ All rights reserved and Privacy Policy
    </>
  );
}

export default App;
