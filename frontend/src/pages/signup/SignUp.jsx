import { useState } from "react";
import { Link } from "react-router-dom"
import useSignup from "../../hooks/useSignup";
import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {

    const [inputs, setInputs] = useState({ // contains inputs from user signup form
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
    });
    

    const { loading, signup } = useSignup() // initializes the loading state and signup function from useSignup hook file


    const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

    const handleSubmit = async (e) => {
        e.preventDefault(); // this prevents page getting refreshed on the submit
        await signup(inputs); // uses inputs from user and calls signup function from the hook file
    }



    // this is the signup section html/css

    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg 
            bg-opacity-0">
                <h1 className='text-3xl font-semibold text-center text-black'>
                    Sign Up
                    <span className='text-blue-500'> To ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Full Name</span>
                        </label>
                    <input
                        type="text"
                        placeholder='John Doe'
                        className='w-full input input-bordered h-10'
                        value={inputs.fullName}
                        onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Username</span>
                        </label>
                    <input
                        type="text"
                        placeholder='Enter username'
                        className='w-full input input-bordered h-10'
                        value={inputs.username}
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
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
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                    </div>
                        <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Confirm Password</span>
                        </label>
                    <input
                        type="text"
                        placeholder='Confirm password'
                        className='w-full input input-bordered h-10'
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                </div>
                
                <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                {/* GENDER CHECKBOX GOES HERE */}
                <Link to="/login" className='text-black text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Already have an account?
                </Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>
                </div>
                </form>

        </div>

    </div>
}

export default SignUp




// DEFAULT SIGNUP CODE

// import GenderCheckbox from "./GenderCheckbox"

// const SignUp = () => {
//     return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg 
//             bg-opacity-0">
//                 <h1 className='text-3xl font-semibold text-center text-black'>
//                     Sign Up
//                     <span className='text-blue-500'> To ChatApp</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text text-black'>Full Name</span>
//                         </label>
//                     <input
//                         type="text"
//                         placeholder='John Doe'
//                         className='w-full input input-bordered h-10'
//                     />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text text-black'>Username</span>
//                         </label>
//                     <input
//                         type="text"
//                         placeholder='Enter username'
//                         className='w-full input input-bordered h-10'
//                     />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text text-black'>Password</span>
//                         </label>
//                     <input
//                         type="text"
//                         placeholder='Enter password'
//                         className='w-full input input-bordered h-10'
//                     />
//                     </div>
//                         <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text text-black'>Confirm Password</span>
//                         </label>
//                     <input
//                         type="text"
//                         placeholder='Confirm password'
//                         className='w-full input input-bordered h-10'
//                     />
//                 </div>
                
//                 <GenderCheckbox/>
//                 {/* GENDER CHECKBOX GOES HERE */}
//                 <a href="#" className='text-black text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Already have an account?
//                 </a>
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 bg-darkgray-100 hover:bg-blue-500'>Sign Up</button>
//                 </div>
//                 </form>

//         </div>

//     </div>
// }

// export default SignUp