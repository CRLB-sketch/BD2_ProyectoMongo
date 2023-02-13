import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, Button, Fab } from '@mui/material'
import userEvent from '@testing-library/user-event'

const Post = ({ post }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8000/api/users/${post.user_name_id}`)
            .then((response) => response.json())
            .then((result) => setUser(result))
    })

    return (
        <div>
            <Box
                display="flex"
                flexDirection={'column'}
                maxWidth={600}
                alignItems="center"
                justifyContent={'center'}
                margin="auto"
                marginTop={10}
                padding={10}
                borderRadius={5}
                boxShadow={'5px 5px 10px  #ccc'}
                sx={{ ':hover': { boxShadow: '15px 15px 30px  #ccc' } }}
            >
                <h3>{user !== null && user.user_name}</h3>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <img src=""></img>

                <br></br>
                {post.tags.length !== 0 && <h3>Tags{':'}</h3>}
                {post.tags.map((tag) => (
                    <p>{tag}</p>
                ))}
                <br></br>

                <TextField
                    id="outlined-multiline-static"
                    label="Comenta"
                    multiline
                    rows={1}
                    defaultValue=" "
                    fullWidth
                    padding="2"
                />
                <br></br>

                <Button variant="outlined">comentarios</Button>
            </Box>
        </div>
    )
}

export default Post
