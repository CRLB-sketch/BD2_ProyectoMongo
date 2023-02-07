import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Login = () => {
    return(
        <div>
            <form>
            <Box display="flex" flexDirection={"column"}>
                <Typography>Login</Typography>
                <TextField label="Username" variant="outlined" />
                <TextField label="Password" variant="outlined" />
                <Button variant="contained">Login</Button>

            </Box>
            </form>
        </div>
    ); 
};

export default Login;