import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useState } from "react";

function AddCourse() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  return (
    // <div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        variant="elevation"
        style={{ marginTop: 0, width: 400, padding: 20 }}
      >
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
          onClick={() => {
            fetch("http://localhost:3000/admin/courses", {
              method: "POST",
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
              });
          }}
        >
          AddCourse
        </Button>
      </Card>
    </div>
  );
}

export default AddCourse;
