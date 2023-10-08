import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

function Signin() {
  // intro to state variable
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
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
        <Typography variant="h3"> Welcome back Sign in</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant="elevation"
          style={{
            marginTop: 0,
            width: 400,
            padding: 20,
            backgroundColor: "#F8F5F1 ",
          }}
        >
          <TextField
            fullWidth={true}
            id="email"
            label="Email"
            variant="outlined"
            backgroundColor="#FDE5D4"
            // onChange={setEmail(e.target.value)}
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            id="pass"
            label="Password"
            variant="outlined"
            backgroundColor="#FDE5D4"
            // onChange={setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button size={"large"} variant="contained">
            Sign in
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
export default Signin;
