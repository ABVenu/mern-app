import React from 'react'
import { NavLink } from 'react-router-dom'
const links = [
    {
        to:"/",
        link:"Signup"
    },
    {
        to:"/login",
        link:"login"
    }
]
const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"40px", margin:"auto", justifyContent:"center", marginBottom:"30px"}}>
        {links.map((el)=> (<NavLink key={el.to} to={el.to}>{el.link}</NavLink>))}
    </div>
  )
}

export default Navbar