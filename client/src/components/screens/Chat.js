import React , {useState,useContext, useEffect} from "react";
// const React, {useState,useContext, useEffect} = require("/react");
import { UserContext } from "../../App";
import { userChats } from "../../api/ChatRequest";
// import { useDispatch, useSelector } from "react-redux";
// import Conversion from ("../Conversation/Conversation")

const Chat = () =>{
      
    
    
    const { state, dispatch } = useContext(UserContext)
    console.log(state);
    const [chats, setChats] = useState([])

    // fetching chat of database from user
    //async function for intracting the db
    // useEffect(()=>{
    //     const getChats = async()=> {
    //         try {
    //             const {data} = await userChats(state._id)

                
    //             setChats(data)
    //             console.log(data)

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getChats()
    // },[state._id])
    useEffect(() => {
        fetch('/allchat', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setChats(result.chats)
            })
    }, [])
    return (
        <div className="Chat">
            {/* Left Side */}
            <div className="Left_side_chat">
                 
                 <div className="Chat-container">
                <h2>Chats</h2>
                <div className="Chat-List">
                    {chats.map((chat) =>(
                        <div>
                            {/* <Conversion data={chat} currentUser={state._id} /> */}
                           <h1>Conversation</h1> 
                        </div>

                    ))}
                </div>
                </div>
            </div>
             
             {/* Right side */}
             <div className="Right-side-chat">
                   <h3>Right side</h3>
             </div>
        </div>
    )
}

export default Chat;