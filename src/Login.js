import React from "react";
import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: ""
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
                    Login
                </Typography>
                
                <TextField 
                    type={"text"} 
                    name="username"
                    value={inputs.username}
                    onChange={handleInputChange}
                    label="Username" 
                    variant="outlined" 
                    margin="normal"
                />
                
                <TextField 
                    type={"password"} 
                    name="password"
                    value={inputs.password}
                    onChange={handleInputChange}
                    label="Password" 
                    variant="outlined" 
                    margin="normal"
                />
                
                <Button 
                    type="submit"
                    variant="contained" 
                    sx={{":hover": {boxShadow: "7px 7px 15px  #bbb"}, margin: 1, borderRadius:2}}
                    onClick
                >
                    Login
                </Button>

                <Button 
                    sx={{":hover": {boxShadow: "7px 7px 15px  #bbb"}, marginTop: 3, borderRadius:2}}
                    
                >
                    ¿No tienes cuenta? Registrate
                </Button>

            </Box>
            </form>
        </div>
    ); 
};

export default Login;