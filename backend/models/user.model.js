import mongoose from 'mongoose'; // imports all functionality to allow connectivity with database


// this is the schema for each account created

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"] // gender must be 1 of the 2
    },
    profilePic: {
        type: String,
        default: "",
    }, // createdAt, updatedAt => Member since <createdAt> ?
}, {timestamps: true});


const User = mongoose.model("User", userSchema); // creates a User model to allow interaction with all of the users in DB


export default User; // exports that User Model