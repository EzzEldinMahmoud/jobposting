import React from 'react'
import { colors, fontname } from '../../theme/colortheme'
import { HiOutlineDotsVertical } from "react-icons/hi";



function JobCard() {
 const mql = window.matchMedia('(min-width:500px)');
 let tabletanddesktopview =mql.matches;

  return (
    <div className=' w-full md:w-full   p-1 mt-4 ml-1  rounded-md hover:border-2 hover:border-gray-700 h-64  justify-between items-start flex-row flex' style={{
    
        backgroundColor: colors.itemscolor,
        overflow:'auto'
   
    }}>
      <div className='flex-col flex pl-2'>
        <div className=' text-3xl font-semibold '>React Developer</div>
        <div className=' text-sm font-semibold  text-gray-500'>acme Co.</div>
        <div className=' text-sm font-semibold text-gray-500 '>United states</div>
        <div className=' text-md mt-4  text-center rounded-md h-7 w-20 ' style={
          {
            backgroundColor:colors.actioncolor,
            fontFamily:fontname,
            fontWeight:"bold",
            color:'white'
          }
        }>Full Time</div>

        <div className='w-full h-full text-sm m-1 flex-col flex p-2 text-gray-500' style={{
         
        }}>
          <ul><li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
            </ul>
        </div>
        <div className='justify-end items-start font-thin text-xs ' style={{
          color:"Gray"
        }}>
Active 9 days ago 
        </div>
       
   </div>
      <div className=' m-2'>
    <HiOutlineDotsVertical size={24}  />  </div>  
    </div>
  )
}

export default JobCard