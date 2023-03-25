import React, { useContext,useRef,useEffect,useState} from "react";
import { Link, useNavigate } from "react-router-dom"; //from going from one page to another page ,page will not refresh now ,it goes directly on that page without refreshing (😇)
import { UserContext } from '../App'
import M from 'materialize-css'

const NavBar = () => {
  const [search,setSearch] = useState('')
  const [userDetails,setUserDetails] = useState([])
  const  searchModal = useRef(null)
  const { state, dispatch } = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(()=>{
    M.Modal.init(searchModal.current)
  },[])
  const renderList = () => {
    if (state) {
      if(state.usertype==0){
       
        return [
          <li key="1"><i  data-target="modal1" className="large material-icons modal-trigger" style={{color:"black"}}>search</i></li>,
          <li key="2"><Link to="/profile">Profile</Link></li>,
        <li key="3"><Link to="/createSuccess">Create Success Story</Link></li>,
          <li key="4">
            <button className="btn #c62828 red darken-3"
              onClick={() => {
                localStorage.clear()
                dispatch({ type: "CLEAR" })
                navigate('/health')
                window.location.reload();
              }}>
              Logout
            </button>
          </li>
        ]
      }
      else{
       
        return [
          
          // <li key="2"><Link to="/profile/doctor">Profile</Link></li>,
          <li key="3"><Link to="/paitent">upcoming paitent</Link></li>,
          <li key="4"><Link to="/my ">Prev paitents</Link></li>,
          <li key="5">
            <button className="btn #c62828 red darken-3"
              onClick={() => {
                localStorage.clear()
                dispatch({ type: "CLEAR" })
                navigate('/health')
                window.location.reload();
              }}>
              Logout
            </button>
          </li>
        ]
      }
      
    } 
    else{
      return [
      
        <li key="2"><Link to="/login">User</Link></li>,
        <li key="3"><Link to="/loginDoc">Doctor</Link></li>        
      ]
    }
  }


  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/login"} className="brand-logo">
          PsychoCorp
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderList()}
        </ul>
      </div>
     
    </nav>
  );
}

export default NavBar;