import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId, // specifies that senderId will contain ObjectId values given from mongoDB?
        ref: "User", // connects this senderId to refer to an instance in the User collection
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }
    // createdAt, updatedAt (mongoDB will create these fields to show when each message was sent)
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema); // creates message model for interaction with all messages in DB

export default Message;