import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const navigate = useNavigate()
    var token = localStorage.getItem("psc_app_token")
    const {notesId} = useParams()
    const note = JSON.parse(localStorage.getItem("note"))
    
    const [inputNotes, setInputNotes] = useState({heading:note.heading, notes:note.notes, tag:note.tag})
    const [msg,setMsg] = useState("")
    function handleChange(e){
        let {name,value} = e.target
        
        setInputNotes({...inputNotes, [name]:value})
        
      }
      function handleSubmit(e){
        e.preventDefault();
        // console.log(notesId)
        // console.log(inputNotes)
        // http://localhost:8080/notes/delete/${notesId}
        // https://tranquil-thicket-73961.herokuapp.com/
        fetch(`https://tranquil-thicket-73961.herokuapp.com/notes/edit/${notesId}`, {
          method:"PATCH",
          headers:{
            "content-type":"application/json",
            "authorization":`Bearer ${token}`
          },
          body:JSON.stringify(inputNotes)
        }).then((res)=> res.json()).then((res)=> {setMsg(res.msg)
        // console.log(res)
        setTimeout(()=>{navigate("/notes")},1000)
        }).catch((err)=> console.log(err))
      }
  return (
    <div>Update

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
        <input type="submit" label="Update" />
      </form>
      <h3>{msg}</h3>

    </div>
  )
}

export default Update

