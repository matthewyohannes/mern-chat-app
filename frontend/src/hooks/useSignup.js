import React from 'react'
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext(); // setAuthUser allows useAuthContext to be used in this file

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender })
        if (!success) return;
    
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
            });

            const data = await res.json() // data is response from the backend res.status after a newUser is made
            if (data.error) {
                throw new Error (data.error)
            }

            // localStorage makes an item with key and data with user data being the data
            localStorage.setItem("chat-user", JSON.stringify(data)); // data is the user object data
			setAuthUser(data); // when user signs up this function updates authUser in the CONTEXT

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }
    return { loading, signup };
}



// error handling

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all the fields')
        return false;
    }

    if (password != confirmPassword) {
        toast.error('Passwords do not match')
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters')
        return false;
    }
    return true;
}


export default useSignup;