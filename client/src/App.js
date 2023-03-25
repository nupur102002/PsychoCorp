import './App.css';
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import {BrowserRouter,Routes,Route,useNavigate,useLocation} from "react-router-dom"
import {reducer,initialState} from './reducers/userReducer'

import Navbar from "./components/Navbar"
import Home from "./components/screens/Home"
import SignIn from "./components/screens/Login"
import SignUp from "./components/screens/Signup"
import Footer from "./components/Footer"


export const UserContext = createContext()


const Routing = ()=>{
  const navigate = useNavigate()
  const location = useLocation()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      console.log(state)
      console.log(user)
      console.log(user.usertype)
      dispatch({type:"USER",payload:user})
    }else{
      if(!location.pathname.startsWith('/reset') &&!location.pathname.startsWith('/docreset' ))
      navigate("/health")
    }
  },[])

  return(
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/login" element={<SignIn />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/create" element={<CreatePost />} />     
  </Routes>
  )
}
function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Navbar />
      <Routing />  
      <Footer />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
