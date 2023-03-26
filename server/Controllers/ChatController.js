const mongoose =require('mongoose')
const Chat = mongoose.model("Chat")

  
const createChat = async(req,res)=>{
    const newChat = new Chat({
        members : [req.body.senderId,req.body.receiverId]
    });
     
    //fetching from server and saving chat in database
    try{
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
   
}

const userChats = async(req,res) =>{
    try{
        const chat = await Chat.find({
            members:{$in:[req.params.userId]}
        })
        res.status(200).json(chat)
    }
    catch(error) {
        res.status(500).json(error);
    }
}

const findChat = async(req,res)=>{
    try {
        const chat = await Chat.findOne({
            members : {$all : [req.params.firstId ,req.params.secondId]}
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {createChat, userChats, findChat}