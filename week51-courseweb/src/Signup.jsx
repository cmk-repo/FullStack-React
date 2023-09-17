import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function Signup() {
    return <div>
        <center>
            <div style={{
                marginTop: 150,
                marginBottom: 10
            }}>
                <Typography variant="h6"> Welcome to DataBird</Typography>
            </div>
          </center>
        <center>
        <Card variant="outlined" style = {{width:400,padding:20}}>
        <TextField fullWidth={true} id="email" label="Email" variant="outlined" />
        <br/>
        <TextField  fullWidth={true} id="pass" label="Password" variant="outlined" />
        <br/>
        <Button variant="contained">Sign up</Button>
        {/* username -<input> type = {"text"} </input>
        <br/>
        password -<input> type = {"password"} </input>
        <br/>
        <button>sign up</button> */}
     </Card>
        </center>
    </div>
}
export default Signup