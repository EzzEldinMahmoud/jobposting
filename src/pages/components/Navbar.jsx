import React from 'react'
import { colors, fontname } from '../../theme/colortheme'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-10 w-full bg-gray-300 flex-row flex p-2 items-center justify-between '
    style={{
      backgroundColor:colors.primary,
     
    }}
    >
<Link to={'/'}>
        <p className='text-2xl font-semibold  p-1 song-myung-regular'
          onClick={() => {

          }}
          style={{
            color: colors.itemscolor
          }}>RemotJobs</p>
</Link>
      
<div className='flex-row flex space-x-2' style={{
  fontFamily:fontname,
  color:colors.itemscolor
}}>
        <Link to={'/login'} onClick={()=>{
         

        }} style={{
          cursor: 'pointer'
          }}>Login</Link>
        <Link to={"/signup"} onClick={() => {
       
        }} style={{
          cursor:'pointer'
          }}>Signup</Link>
        <Link to={"/profile"} onClick={() => {

        }} style={{
          cursor: 'pointer'
        }}>Profile</Link>

  </div>
    </div>
  )
}

export default Navbar