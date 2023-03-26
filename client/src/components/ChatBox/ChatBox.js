import React, { useEffect, useState } from "react";
import { getMessages } from "../../api/MessageRequest";
import { format } from "timeago.js"
import InputEmoji from "react-input-emoji"
import "./ChatBox.css";

const ChatBox = ({ chat, currentUser }) => {

    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    //fetching data from header
    useEffect(() => {
        const userid = chat?.members?.find((id) => id !== currentUser);
        fetch(`/user/${userid}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                // console.log(result)
                setUserData(result)
            })
        // if (chat !== null) userid();  
    }, [chat, currentUser])

    //fetching data for messages 
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await getMessages(chat._id)


                setMessages(data)
                console.log(data)

            } catch (error) {
                console.log(error);
            }
        }
        if (chat !== null) fetchMessages();
    }, [chat]);

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }

    return (

        
        <>
        
            <div className="ChatBox-container">

                <>
                    <div className="chat-header">
                        <div className="follower">
                            <div className="online-dot"></div>
                            <img src={userData?.user?.pic}
                                className="followerImage"
                                style={{ width: "50px", height: "50px" }} />

                            <div className="name" style={{ fontSize: '0.8rem' }}>
                                <span>{userData?.user?.name}</span>

                            </div>

                        </div>
                    </div>

                    <hr
                        style={{ 
                            width: "95%",
                            border: "0.1px solid #ececec",
                            marginTop: "20px",
                        }}
                    />
                </>
            </div>
            {/* chatbox messages */}
            <div className="chat-body">
                {messages.map((message) => (
                    <>
                        {/* giving dynamic classname */}
                        <div className={message.senderId === currentUser ? "message own" : "message"} >
                            <span>{message.text}</span>
                            <span>{format(message.createdAt)}</span>
                        </div>
                    </>
                ))}
            </div>

            {/* chat sender  */}
            <div className="chat-sender">
                <div>+</div>
                <InputEmoji
                    value={newMessage}
                    onChange={handleChange}
                />
                <div className="send-button button">Send</div>
            </div>
        </>
    )
}

export default ChatBox