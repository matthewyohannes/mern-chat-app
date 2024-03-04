import React from 'react'
import MessageContainer from '../../components/messages/MessageContainer'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
    return <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-black bg-clip-padding backdrop-filter 
    backdrop-blur-lg bg-opacity-25'>
        <Sidebar />
        <MessageContainer />
        
    
    </div>

}

export default Home