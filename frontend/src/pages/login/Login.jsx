import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const {loading, login} = useLogin() // grabs login function from useLogin hook so we can use it here
    const handleSubmit = async (e) => {
        e.preventDefault(); // this prevents page getting refreshed on the submit
        await login(username, password); // uses inputs from user and calls login function from the hook file
    }

    return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter background-blur-lg 
        bg-opacity-75'>
            <h1 className='text-3xl font-semibold text-center text-black'>
                Login
                <span className='text-blue-500'> To ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-black'>Username</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Enter username'
                        className='w-full input input-bordered h-10'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-black'>Password</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Enter password'
                        className='w-full input input-bordered h-10'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Link to="/signup" className='text-black text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    {"Don't"} have an account?
                </Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>;

}
export default Login;






// STARTER CODE FOR THIS FILE

// const Login = () => {
//     return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter background-blur-lg 
//         bg-opacity-75'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 Login
//                 <span className='text-blue-500'> To ChatApp</span>
//             </h1>

//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text text-black'>Username</span>
//                     </label>
//                     <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text text-black'>Password</span>
//                     </label>
//                     <input type="text" placeholder='Enter password' className='w-full input input-bordered h-10'/>
//                 </div>
//                 <a href="#" className='text-black text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     {"Don't"} have an account?
//                 </a>
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 bg-darkgray-100 hover:bg-blue-500'>Login</button>
//                 </div>
//             </form>
//         </div>
//     </div>;

// }
// export default Login;
