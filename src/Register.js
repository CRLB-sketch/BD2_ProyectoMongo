import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Register = () => {
    return(
        <div>
            <form>
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
                    variant="outlined" 
                    margin="normal"
                />
                <TextField 
                    type={"password"} 
                    label="Password" 
                    variant="outlined" 
                    margin="normal"
                />
                <TextField 
                    type={"password"} 
                    label="Confirm Password" 
                    variant="outlined" 
                    margin="normal"
                />
                <Button 
                    variant="contained" 
                    sx={{":hover": {boxShadow: "7px 7px 15px  #bbb"}, margin: 1, borderRadius:2}}
                >
                    Registrate
                </Button>

                <Button 
                    sx={{":hover": {boxShadow: "7px 7px 15px  #bbb"}, marginTop: 3, borderRadius:2}}
                >
                    ¿Ya tienes cuenta? Inicia sesión
                </Button>

            </Box>
            </form>
        </div>
    ); 
};

export default Register;