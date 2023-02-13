import React from "react"
import "./Header.css"

import ButtonGroup from '@mui/material/ButtonGroup';
import { Box, Avatar, Chip, Button, Fab, } from "@mui/material";


const Header = ({user}) => {
    return(
        <div>
            
            <header>
                <a href="#" class="logo">Twitortrix</a>
                
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Chip avatar={<Avatar>M</Avatar>} label="" />
                    <Button>Inicio</Button>
                    <Button>Explorar</Button>
                    <Button>Salir</Button>
                </ButtonGroup>
                
            </header>
        </div>
    )
}

export default Header