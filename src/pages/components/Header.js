import React from "react"
import "./Header.css"

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

const Header = ({user}) => {
    return(
        <div>
            
            <header>
                <a href="#" class="logo">Twitortrix</a>
                <i class="menu">=</i>
                <nav>
                    <h3>{user.user_name}</h3>
                    <a href="#">Inicio</a>
                    <a href="#">Mis posts</a>
                    <a href="#">Salir</a>
                </nav>
                <div class="overlay"></div>
            </header>
        </div>
    )
}

export default Header