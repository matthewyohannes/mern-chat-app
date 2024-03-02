import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";



// functionality of each endpoint function

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body; // fills vars with input from user


        if (password != confirmPassword) { // checks if pass and confirmPass are not equal
            return res.status(400).json({error:"Passwords don't match"})
        }

        const user = await User.findOne({ username }) // checks if given username exists in the database
        
        
        if (user) {
            return res.status(400).json({error:"Username already exists"}) // returns error if user exists in DB
        }

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); // salt/hash password given from input
        // const https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`; // urls for pfps
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({ // create new user object with data given from user
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender == "male" ? boyProfilePic : girlProfilePic,            
        })
        

        if (newUser) { // makes sure a newUser was just created
            // Generate JWT Token Here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save(); // saves data to database

            res.status(201).json({ // means successfully created a user and response will have the following data
                _id: newUser._id, // automatically given by DB?
                fullname: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            })
        }
        else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;


        const user = await User.findOne({ username }); // returns the User object that contains that username

        // also prevents internal error if no username exist
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "") // compare input pass w db pass

        if (!user || !isPasswordCorrect) { // check if username and password were found or invalid
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user._id, res); // uses JWT and Cookie to handle user auth and allow further requests on web

        res.status(200).json({ // returns status data in console for client side after logging in
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });


    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 }) // creates new cookie with age = 0 to expire immediately
        res.status(200).json({message: "Logged out successfully"})
    } catch (error) {
        console.log("Error in logout controller", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
};