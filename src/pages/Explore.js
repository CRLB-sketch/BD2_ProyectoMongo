import React from 'react';
import { Box, Typography, TextField, Button, Fab, } from "@mui/material";


const queryManager = ({}) => ({

})

const Explore = () => {
    return (
        <div>
            
            <div id="poster">
            <form onSubmit={queryManager}>
            <Box
            display="flex" 
            flexDirection={"column"} 
            maxWidth="45%" 
            
            justifyContent={"center"} 
            margin="auto" 
            marginTop={10}
            padding={10}
            borderRadius={5}
            boxShadow={"5px 5px 10px  #ccc"}
            sx={{
                height: "25%",
                backgroundColor: 'white',
                padding: 2,
                borderStyle: 'inset',
                borderColor: '#344b8a',
                
            }}
            >
                <TextField
                id="filled-multiline-flexible"
                label="Buscar por tag"
                multiline
                maxRows={2}
                variant="filled"
                
                />
                <Button variant="contained" color="success">
                    Buscar
                </Button>
            <br></br>

            <TextField
                id="filled-multiline-flexible"
                label="Buscar por fecha"
                multiline
                maxRows={2}
                variant="filled"
                
                />
                <Button variant="contained" size="medium">
                Buscar
                </Button>
            <br></br>

            <Button color="secondary">Mis posts</Button>
           
            
            </Box>
            </form>
            </div>
            
            <div>
               
                
            
            
            </div>
        </div>
    );
}

export default Explore;
