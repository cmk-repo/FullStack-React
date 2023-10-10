import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Fn_map } from "./courses";


function Course() {
  let { courseId } = useParams(); // this name come from router
  const [courses, setCourses] = useState([]);
  // get all course, this should be fixed 

  useEffect(() => { // stop multiple requsts sending
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem("randomkey") },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.courses);
        setCourses(data.courses);
        // JSON.stringify(courses)
      });
  }, []);

  let course = null;
  console.log(courseId);
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == courseId) [
      course = courses[i]
    ]
  }
  if (!course) {
    return (<div> Loading ... </div>)
  }

  return (
    //       <div>
    //         {JSON.stringify(courses)}
    // <br />
    // <br />
    //         {JSON.stringify(course)}</div>
    <div>
      <Card style={{ minHeight: 200, margin: 10, width: 300 }}>
        <Typography textAlign={"center"} ariant="h4">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle">{course.description}</Typography>
        <img src={course.imageLink} style={{ width: 300 }}></img>
      </Card>
    </div>
  )
}

export default Course;