import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const links = [
    {
        to:"/signup",
        link:"Signup"
    },
    {
        to:"/login",
        link:"login"
    }
]
const Navbar = () => {
  const [status,setStatus] = useState(false)
  const navigate = useNavigate()

  function handleLogout(e){
        e.preventDefault();
        setStatus(true)
        localStorage.removeItem("psc_app_token")
        localStorage.removeItem("note")
        setTimeout(()=>{navigate("/")
      setStatus(false)},1000)
  }
  return (
    <div style={{display:'flex',gap:"40px",justifyContent:"center", justifyItems:"center"}}>
        <div style={{display:"flex", gap:"40px"}}>
            {links.map((el)=> (<NavLink key={el.to} to={el.to}>{el.link}</NavLink>))}
        </div>
        <div>
          <button onClick={handleLogout}>{status? "Logged out Successfully":"Logout"}</button>
        </div>
        {/* {status? <h3>Logged out Successfully</h3>:<h3></h3>} */}
    </div>
  )
}

export default Navbar