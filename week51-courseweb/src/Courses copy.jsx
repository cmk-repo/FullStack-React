import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState,useEffect } from "react";

// october 10th, In this current code this will update 3 times 


function Courses() {
    const [courses,setCourses] = useState([]);

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
    
    
    return( 
        // add grid system here 
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
      {courses.map(course => <Fn_map course={course} />)}
    </div>
       // <Course course = {courses[0]} /> .map function will spit out all to max length automaticaly
       // <Course course = {courses[1]} />
       // <Course course = {courses[2]} />
    )
}
  
export function Fn_map(props){
    return ( 
    <Card style={{ minHeight:200, margin :10, width:300}}>
  
        {props.course.id}
       <Typography textAlign={"center"} ariant="h4">{props.course.title}</Typography> 
       <Typography textAlign={"center"} variant="subtitle">{props.course.descrition}</Typography>
       <img src={props.course.imageLink} style={{width:300}}></img>
        
    </Card>
    )
}
  export default Courses;