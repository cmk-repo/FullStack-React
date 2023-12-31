import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

// adding render as soon as we render
// DOM manipulation document.getelementby id
// better way is to update the course state variable 

function Course() {
  console.log(" Hi From course")
  let { courseId } = useParams(); // this name come from router
  //const [courses, setCourses] = useState([]);// replacing in line 25. trying to remove conneciton to Courses 
  //const [courses,setCourses] = useRecoilState(coursesState); // this will still re-render the whole thing 
  const setCourses = useSetRecoilState(coursesState)

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
  // this is loading all the course again when page is reloaded .

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CourseCard courseId={courseId}/>
      <UpdateCard courseId={courseId}/> 
    </div>
  )
  // Changes happen in update card so we can pass the state variuabvle as pop
  function UpdateCard(props) {


    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    //const course = props.course;
    const [courses, setCourses]= useRecoilState(coursesState)
    console.log(" Update card re rendered ")
  
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant="elevation"
          style={{ marginTop: 0, width: 400, padding: 20 }}
        >
          <Typography> Update Course Detail</Typography>
          <TextField
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            fullWidth={true}
            label="Title"
            variant="outlined"
          />
          <br />
          <TextField
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            fullWidth={true}
            label="Description"
            variant="outlined"
          />
          <br />
          <TextField
            onChange={(e) => {
              setImage(e.target.value);
            }}
            fullWidth={true}
            label="Image Link"
            variant="outlined"
          />
          <br />
          <Button
            size={"large"}
            variant="contained"
            onClick={() => { // on click it will put new data of the course id only,. this is defined in thel backend post man test routes 
              fetch("http://localhost:3000/admin/courses/" + props.courseId, {
                method: "PUT",
                body: JSON.stringify({
                  title: title, // have to send what server wants so name it right
                  description: description,
                  imageLink: image,
                  published: true,
                }),

                headers: {
                  "Content-type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("randomkey"),
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  // localStorage.setItem("randomkey", data.token);
                  console.log(data);
                  //alert("course Updated")
                  let updatedCourse = [];
                  // PROPS are passses so we iterate though the props and then update the props 
                  for (let i = 0; i < courses.length; i++) { // find the changed course 
                    if (courses[i].id == props.courseId) {
                      updatedCourse.push({
                        id: props.courseId,
                        title: title,
                        description: description,
                        imageLink: image
                      })
                    } else {
                      updatedCourse.push(courses[i]) // only updaing the id that was changed
                    }
                  }
                  setCourses(updatedCourse)
                });
            }}
          >
            Update Course
          </Button>
        </Card>
      </div>
    )
  }

  function CourseCard(props) {
    // const course = props.course
    const courses = useRecoilValue(coursesState) // added recoil state so that we are only subscribed here not above 
    let course = null; // local variable with cousess 
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].id == props.courseId) [
        course = courses[i]
      ]
    }
    if (!course) {
      return (<div> Loading ... </div>)
    }
    console.log(" Course card re rendered ")

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ minHeight: 200, margin: 10, width: 300 }}>
          <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
          <Typography textAlign={"center"} variant="h6">{course.description}</Typography>
          <img src={course.imageLink} style={{ width: 300 }}></img>
        </Card>
      </div>
    )
  }
}


export default Course;

const coursesState = atom({
  key: 'coursesState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value) 
});