import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Notes = () => {

  const [notes,setNotes] = useState([])
  var token = localStorage.getItem("psc_app_token")
  
  const [inputNotes, setInputNotes] = useState({heading:"", notes:"", tag:""})
  const [msg,setMsg] = useState("")

  function getData(){
    fetch("http://localhost:8080/notes",{
      method:"GET",
      headers:{
        "authorization":`Bearer ${token}`
      }
    }).then((res)=>res.json()).then((res)=> {
      setNotes(res);
      console.log(res)
    }).catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getData()
  },[])


  function handleChange(e){
    let {name,value} = e.target
    setInputNotes({...inputNotes, [name]:value})

  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:8080/notes/addnotes", {
      method:"POST",
      headers:{
        "content-type":"application/json",
        "authorization":`Bearer ${token}`
      },
      body:JSON.stringify(inputNotes)
    }).then((res)=> res.json()).then((res)=> {setMsg(res.msg)
    console.log(res)},
    alert("Notes Added Successfully"),
    window.location.reload()).catch((err)=> console.log(err))
  }

function handleClick(e){
  // console.log(e)
   localStorage.setItem("note",JSON.stringify(e))
}
  return (
    <div>Notes

      <form onSubmit={handleSubmit}>
        <input placeholder='add heading' onChange={handleChange} value={inputNotes.heading}  name="heading" />
        <br/>
        <br/>
        <input placeholder='add notes' onChange={handleChange} value={inputNotes.notes}  name="notes" />
        <br/>
        <br/>
        <input placeholder='add tag' onChange={handleChange} value={inputNotes.tag}  name="tag" />
        <br/>
        <br/>
        <input type="submit" />
      </form>
        {msg? <h3>{msg}</h3>:<h3></h3>}
      <div>
        <h1>Notes Listed Below</h1>
        {
          notes && notes.map((el)=>(<div key={el._id} >
            <div style={{display:'flex', gap:"30px", alignItems:"center", justifyContent:"center"}}>
              {el.heading} 
              <Link to={`/notes/${el._id}`} onClick={(e)=>handleClick(el)} >View More</Link>
  
              </div></div>))
        }
      </div>

    </div>
  )
}

export default Notes