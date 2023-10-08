import { Button, Typography, filledInputClasses } from "@mui/material";
// import { useHistory } from "react-router-dom";
function Appbar() {
  // const history = useHistory();
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
              window.location = "/signup"; // it is reloading the whole page
              // history.push("/signup");
            }}
          >
            Sign up
          </Button>
        </div>
        <div style={{ marginRight: 10 }}>
          <Button
            variant={"contained"}
            onClick={() => {
              window.location = "/login";
              // history.push("/login");
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
