import express from "express"
import dotenv from "dotenv" // allows access to env variable data
import cookieParser from "cookie-parser";
import path from 'path';


import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";



const PORT = process.env.PORT || 5000;

const __dirname = path.resolve(); // deployment purposes

dotenv.config(); // allows env variables to work

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes); // accesses the auth.routes.js file when that endpoint is used
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist"))); // deployment purposes

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


server.listen(PORT, () => { // connects backend to mongoDB and will return error if cannot connect
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
});
