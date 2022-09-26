import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [inputData, setInputData] = useState({email:"", password:""})
    const [msg,setMsg] = useState("")
    const navigate = useNavigate()

    function handleChange(e){

        const {name,value} = e.target
        setInputData({...inputData, [name]:value})
    }


    function handleSubmit(e){
         e.preventDefault()
        console.log(inputData)

        fetch("https://tranquil-thicket-73961.herokuapp.com/user/login",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(inputData)
        }).then((res)=>res.json()).then((res)=>{
            setMsg(res.msg);
            localStorage.setItem("psc_app_token", res.token)
            navigate("/notes")

        })
        .catch((err)=>console.log(err))
    }

  return (
    <div>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter email' name='email' value={inputData.email} onChange={handleChange} />
            <br/>
            <br/>
            <input type="text" placeholder='enter password' name='password'  value={inputData.password} onChange={handleChange} />
            <br/>
            <br/>
            <input type="submit" />
        </form>
        <h3>{msg}</h3>
    </div>
  )
}

export default Login