import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'


function App() {
  const { authUser } = useAuthContext(); // authUser is set here because useAuthContext returns authUser

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
                                      {/* if user loggedIn, nav to Home, if not signed in, navigate to SignUp */}
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} /> 
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
