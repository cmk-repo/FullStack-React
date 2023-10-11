import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup.jsx";
import Signin from "./Signin.jsx";
import Appbar from "./Appbar.jsx";
import AddCourse from "./AddCourse.jsx";
import Courses from "./courses.jsx";
import Course from "./Course.jsx";
import React from 'react';
import {  RecoilRoot } from 'recoil';


function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F1F0E8",
      }}
    >
    <RecoilRoot>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseId" element={<Course />} />
        </Routes>
      </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
