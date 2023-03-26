const io = require('socket.io')(8800, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let activeUsers = [] //list of active user

io.on("connection", (socket) => {


    //add new user in socket server
    //newUserId taking from react client side
    socket.on('new-user-add', (newUserId) => {
        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({
                userId: newUserId,
                socketId: socket.id
            })
        }
        console.log("Connected User" , activeUsers);
        //sending the data to the react client side using emit
        // we will get the data into the client side using get-users
        io.emit('get-users',activeUsers)
    })

   socket.on("disconnect",()=>{
    activeUsers = activeUsers.filter((user)=> user.socketId !== socket.id);
    console.log("User Disconnected" , activeUsers);
   })
})