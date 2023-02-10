import React from "react"

const Header = ({user}) => {
    return(
        <div>
            <h1>Twitortrix</h1>
            <h2>Bienvenid@: {user.user_name}</h2>
        </div>
    )
}

export default Header