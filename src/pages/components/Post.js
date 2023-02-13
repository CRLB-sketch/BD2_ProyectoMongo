import React from "react"
import { Box, Typography, TextField, Button, Fab, } from "@mui/material";


const Post = ({post}) => {
    return(
        <div>
            
            
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
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <img src=""></img>
            <br></br>
            <br></br>

            <TextField
                id="outlined-multiline-static"
                label="Comenta"
                multiline
                rows={1}
                defaultValue=" "
                fullWidth
                padding = "2"
            />   
            <br></br>

            <Button variant="outlined">comentarios</Button>

            </Box>
        </div>
    )
}

export default Post