import React from 'react'
import { colors, fontname } from '../../theme/colortheme'
import { FaLocationArrow, FaRegBookmark } from "react-icons/fa";
import { MdGpsFixed, MdLocalActivity, MdLocationOn, MdWork } from "react-icons/md";


function JobDetails() {
  return (
      <div className=' w-full  md:w-11/12 ml-4  mt-4 rounded-md  flex  ' style={{
        backgroundColor:colors.itemscolor,
        overflow:'hidden'
      }}>
          <div className='flex-col flex p-2  ml-2 w-full h-full'>
              <div className=' text-3xl font-semibold '>React Developer</div>
              <div className=' text-sm font-semibold  text-gray-400'>acme Co.</div>
              <div className=' text-sm font-semibold text-gray-500 '>United states</div>
              <div className='flex-row flex  mt-4'>
                 <button className=' mr-2 rounded-md items-center w-2/6 h-10 font-semibold' 
              style={{
                backgroundColor:colors.actioncolor,
                color:colors.itemscolor
              }}
              >Apply Now</button>
                  <button className='  rounded-md items-center w-10 h-10 font-semibold items-center justify-center text-center'
                      style={{
                          backgroundColor: 'grey',
                          opacity:0.5
                        
                      }}
                  ><FaRegBookmark className='w-full'/></button>
              </div>
             
              
              <div className=' text-lg mt-5  h-7 w-22 ' style={
                  {
                      backgroundColor: colors.itemscolor,
                      fontFamily: fontname,
                      fontWeight: "bold",
                      color: 'grey'
                  }
              }>Job details</div>
              <div className='font-thin text-sm text-gray-500'>Here's how the job details align with your search</div>
             <div className='flex-row flex items-center space-x-2 mt-2'>
                  <MdWork color={colors.actioncolor} size={25}/>   <div className='font-bold text-lg text-gray-500'>Job type</div>
                </div> 
              <div className=' text-md ml-7  mt-1 text-center rounded-md h-7 w-20 ' style={
                  {
                      backgroundColor: colors.actioncolor,
                      fontFamily: fontname,
                      fontWeight: "bold",
                      color: 'white'
                  }
              }>Full Time</div>
              <div className='flex flex-col w-full  divide-y divide-solid divide-gray-300'>
                  <div  >
                    <div>
                         <div className='font-bold text-xl text-gray-500 mt-2'>Location</div>
                      <div className='flex-row flex items-center space-x-2 mt-2'>
                        <MdLocationOn size={20}/>   <div className='font-semibold text-md text-gray-500'>United states</div>
                      </div> 
                    </div>
                     
                </div>
                  <div   className='w-full  h-4/6 text-sm m-1 flex-col flex p-2 text-gray-500' style={{
                    overflow:'hidden'
                  }}>
                  <ul  className='space-y-1 w-full h-full'
                  ><li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>
                          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend </li>

                  </ul>
              </div>
              </div>
              
           

          </div>

      </div>
  )
}

export default JobDetails