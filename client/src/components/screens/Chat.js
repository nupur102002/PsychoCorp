import React , {useState,useContext, useEffect} from "react";
// const React, {useState,useContext, useEffect} = require("/react");
import { UserContext } from "../../App";
import { userChats } from "../../api/ChatRequest";
// import { useDispatch, useSelector } from "react-redux";
import Conversation from "../Conversation/Conversation"
import ChatBox from "../ChatBox/ChatBox"

const Chat = () =>{
      
    
    const [currentChat,setCurrentChat] = useState(null)
    const { state, dispatch } = useContext(UserContext)
    console.log(state);
    const [chats, setChats] = useState([])
    

     
    // fetching chat of database from user
    //async function for intracting the db
    useEffect(()=>{
        const getChats = async()=> {
            try {
                const {data} = await userChats(state._id)

                
                setChats(data)
                console.log(data)

            } catch (error) {
                console.log(error);
            }
        }
        getChats()
    },[state._id])
  
    return (
        <>
        <div className="Chat">
            {/* Left Side */}
            <div className="Left_side_chat">
                 
                 <div className="Chat-container">
                <h3>chats</h3>
                <div className="Chat-List">
                    {chats.map((chat) =>(
                        
                        <div onClick={() => setCurrentChat(chat)}>
                            <Conversation data={chat} currentUserId={state._id} />
                           <h1>Conversation</h1> 
                        </div>

                    ))}
                </div>
                </div>
            </div>
             
             {/* Right side */}
             <div className="Right-side-chat">
                   <h4>your chat </h4>
                   {/* chat body */} 
                   
                   <ChatBox chat ={currentChat} currentUser = {state._id} />

             </div>
        </div>
        </>
    )
}

export default Chat;