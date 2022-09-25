import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Notes from "./Notes";
import NotesId from "./NotesId";
import Signup from "./Signup";
import Update from "./Update";

export default function AllRoutes(){
    return (
        <Routes>
   <Route  path="/" element={<Signup />} />
   <Route  path="/login" element={<Login />} />
   <Route  path="/notes" element={<Notes />} />
   <Route  path="/notes/:notesId" element={<NotesId />} />
   <Route  path="/edit/:notesId" element={<Update />} />
</Routes>
    )
    
}
