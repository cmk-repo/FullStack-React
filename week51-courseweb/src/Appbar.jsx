import { Button, Typography, filledInputClasses } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function Appbar() {
  // const history = useHistory(); // discarded
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: { "Authorization": "Bearer " + localStorage.getItem("randomkey") }
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        console.log(data)
        if (data.username) {
          setUserEmail(data.username)
        }
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
        //backgroundColor: "#F1F0E8",
      }}
    >
      <div>
        <Typography variant="h3">DataBirdy</Typography>
      </div>
      <div style={{ display: "flex", padding: 8 }}>
        <div style={{ marginRight: 10 }}>
          <Button
            variant={"contained"}
            onClick={() => {
              //window.location = "/signup"; // it is reloading the whole page
              // history.push("/signup");
              navigate("/signup");
            }}
          >
            Sign up
          </Button>
        </div>
        <div style={{ marginRight: 10 }}>
          <Button
            variant={"contained"}
            onClick={() => {
              // window.location = "/login";
              // history.push("/login");
              navigate("/login");
            }}
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
