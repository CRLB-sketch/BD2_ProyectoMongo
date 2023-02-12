import React, { useState, useEffect } from "react"
import "./Blog.css"
// Import Componentes
import Header from './components/Header'
import Post from './components/Post'
import { Box, Typography, TextField, Button, Fab, } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { borderColor } from "@mui/system";

const Blog = ({user}) => {
    const [posts, setPosts] = useState(null)
    
    useEffect(() => {
        fetch('http://localhost:8000/api/posts/')
            .then((response) => response.json())
            .then((result) => setPosts(result))
    })
    
    return(
        
        <div>
            <Header user={user}/>
            <h1>asd</h1>
            <div id="poster">
            
            <Box
            display="flex" 
            flexDirection={"column"} 
            alignItems ="center" 
            justifyContent={"center"} 
            sx={{
                width: "30%",
                height: 300,
                backgroundColor: 'white',
                padding: 2,
                borderStyle: 'inset',
                borderColor: '#344b8a',
                
            }}
            >
                <TextField
                id="filled-multiline-flexible"
                label="Titulo"
                multiline
                maxRows={2}
                variant="filled"
                
            />
            <br></br>
            <br></br>

            <TextField
                id="outlined-multiline-static"
                label="Dinos que piensas.."
                multiline
                rows={6}
                defaultValue=" "
                fullWidth
            />
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            </Box>
            </div>

            <div>
                {posts != null && posts.map((post) => (<Post post={post}/>))}
                
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
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <img src=""></img>
            <Button variant="outlined">comentarios</Button>
            <TextField
                id="outlined-multiline-static"
                label="Comenta"
                multiline
                rows={2}
                defaultValue=" "
                fullWidth
            />    

            </Box>
            
            </div>

            
        </div>
    )
}

export default Blog