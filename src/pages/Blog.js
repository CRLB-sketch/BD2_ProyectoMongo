import React, { useState, useEffect } from "react"
// Import Componentes
import Header from './components/Header'
import Post from './components/Post'

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

            <div>
                {posts != null && posts.map((post) => (<Post post={post}/>))}
            </div>
        </div>
    )
}

export default Blog