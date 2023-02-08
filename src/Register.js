import React from "react";
import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';


const Register = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });

    const handleInputChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })); 
    }

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        console.log(inputs);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <Box 
                display="flex" 
                flexDirection={"column"} 
                maxWidth={600} 
                alignItems ="center" 
                justifyContent={"center"} 
                margin="auto" 
                marginTop={10}
                padding={10}
                borderRadius={5}
                boxShadow={"5px 5px 10px  #ccc"}
                sx={{":hover": {boxShadow: "15px 15px 30px  #ccc"}}}
            >
                <Typography
                    variant="h3" 
                    padding={5} 
                    textAlign = "center"
                    color={'secondary.main'}
                    fontFamily={"Monospace"}
                >
                    Register
                </Typography>
                <TextField 
                    type={"text"} 
                    label="Username" 
                    name="username"
                    value={inputs.username}
                    onChange={handleInputChange}
                    variant="outlined" 
                    margin="normal"
                />
                <TextField 
                    type={"password"} 
                    label="Password" 
                    name="password"
                    value={inputs.password}
                    onChange={handleInputChange}
                    variant="outlined" 
                    margin="normal"
                />
                <TextField 
                    type={"password"} 
                    label="Confirm Password" 
                    name="confirmPassword"
                    value={inputs.confirmPassword}
                    onChange={handleInputChange}
                    variant="outlined" 
                    margin="normal"
                />
                <Button 
                    variant="contained" 
                    sx={{":hover": {boxShadow: "7px 7px 15px  #bbb"}, margin: 1, borderRadius:2}}
                    type="submit"
                    endIcon={<HowToRegIcon />}
                >
                    Registrate
                </Button>

                <Button 
                    sx={{":hover": {boxShadow: "7px 7px 15px  #bbb"}, marginTop: 3, borderRadius:2}}
                    onClick={() => {window.location.href = "./Login"}}
                >
                    ¿Ya tienes cuenta? Inicia sesión
                </Button>

            </Box>
            </form>
        </div>
    ); 
};

export default Register;