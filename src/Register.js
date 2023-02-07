import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Register = () => {
    return(
        <div>
            <form>
            <Box display="flex" flexDirection={"column"}>
                <Typography>Register</Typography>
                <TextField label="Username" variant="outlined" />
                <TextField label="Password" variant="outlined" />
                <TextField label="Confirm Password" variant="outlined" />
                <Button variant="contained">Register</Button>

            </Box>
            </form>
        </div>
    ); 
};

export default Register;