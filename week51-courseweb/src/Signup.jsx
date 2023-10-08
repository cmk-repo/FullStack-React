import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3"> Welcome Sign up</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant="elevation"
          style={{
            marginTop: 0,
            width: 400,
            padding: 20,
            //backgroundColor: "#F8F5F1",
          }}
        >
          <TextField
            fullWidth={true}
            //id="userEmail"
            label="Email"
            variant="outlined"
            // backgroundColor="#FDE5D4"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            //id="userPassword" // bad practice
            label="Password"
            variant="outlined"
            //backgroundColor="#FDE5D4"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button
            size={"large"}
            variant="contained"
            onClick={() => {
              // function callback2(data) {
              //   console.log(data);
              // }
              // function callback1(res) {
              //   res.json().then(callback2);
              // }
              // below 2 lines are bad pactrice so we use state variables
              // let username = document.getElementById("userEmail").value;
              // let password = document.getElementById("userPassword").value;

              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: email, // have to send what server wants so name it right
                  password: password,
                }),

                headers: {
                  "Content-type": "application/json",
                },
              }) //.then(callback1);
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  localStorage.setItem("randomkey", data.token);
                  console.log(data);
                });
            }}
          >
            Sign up
          </Button>
          {/* username -<input> type = {"text"} </input>
        <br/>
        password -<input> type = {"password"} </input>
        <br/>
        <button>sign up</button> */}
        </Card>
      </div>
    </div>
  );
}
export default Signup;
