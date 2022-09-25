import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const NotesId = ({match}) => {
    var token = localStorage.getItem("psc_app_token")
    const [msg,setMsg] = useState("")
    const navigate = useNavigate()

    const note = JSON.parse(localStorage.getItem("note"))
    const {notesId} = useParams()
    useEffect(()=>{
        console.log(note)
    },[])
   

    function handleDelete(e){
        e.preventDefault()
        console.log(notesId)

        fetch(`http://localhost:8080/notes/delete/${notesId}`, {
        method:"DELETE",
        headers:{
        "content-type":"application/json",
        "authorization":`Bearer ${token}`
      },
    //   body:JSON.stringify(inputNotes)
    }).then((res)=> res.json()).then((res)=> {
        setMsg(res.msg)
    //   console.log(res)
      setTimeout(()=>{navigate("/notes")},1000)
     } )
.catch((err)=> console.log(err))

    }


    function handleUpdate(e){
      e.preventDefault();
      
      navigate(`/edit/${notesId}`)
    }
  return (
    <div>
        NotesId

        <div style={{display:'flex', gap:"30px", alignItems:"center", justifyContent:"center"}}>
        <h3>{note.heading}</h3>
        <h3>{note.notes}</h3>
        <h3>{note.tag}</h3>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>Update</button>
        </div>
        <h3>{msg}</h3>
        

    </div>
  )
}

export default NotesId