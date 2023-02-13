import React, { useState, useEffect } from "react"
import "./Blog.css"
// Import Componentes
import Post from './components/Post'
import { Box, Typography, TextField, Button, Fab, } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';




const createPost = ({}) => ({

})


const Blog = ({user}) => {
    const [posts, setPosts] = useState(null)
    
    useEffect(() => {
        fetch('http://localhost:8000/api/posts/')
            .then((response) => response.json())
            .then((result) => setPosts(result))
    })
    
    return(
        
        <div>
            
            
            <div id="poster">
            <form onSubmit={createPost}>
            <Box
            display="flex" 
            flexDirection={"column"} 
            maxWidth="45%" 
            alignItems ="center" 
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
                label="Titulo"
                multiline
                maxRows={2}
                variant="filled"
                
            />
                
            <br></br>

            <TextField
                id="outlined-multiline-static"
                label="Dinos que piensas.."
                multiline
                rows={6}
                defaultValue=" "
                fullWidth
            />
            <TextField
                id="filled-multiline-flexible"
                label="Añade tus tags"
                multiline
                maxRows={1}
                variant="filled"
                
                
            />
            
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <br></br>
            <Fab variant="extended" size="small" color="primary" aria-label="add">
                <NavigationIcon sx={{ mr: 1 }} />
                postear!
            </Fab>
            </Box>
            </form>
            </div>
            
            <div>
                {posts != null && posts.map((post) => (<Post post={post}/>))}
                
            
            
            </div>

            
        </div>
    )
}

export default Blog