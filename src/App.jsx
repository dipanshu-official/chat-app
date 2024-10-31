import React from 'react'
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat/Chat"
import Login from "./pages/Login/Login"
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/Chat' element={<Chat/>} />
    <Route path='/Profile' element={<ProfileUpdate/>}/> 
    </Routes>
    
    </>
  )
}

export default App                                                                                                     






















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































