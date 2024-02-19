import React, { useState, useEffect } from 'react'
import { colors, fontname } from '../theme/colortheme'
import {  FaSearch } from "react-icons/fa";
import JobCard from './components/JobCard';
import JobDetails from './components/JobDetails';

function Home() {
  const [search, setsearch] = useState('')
  const [show, setshow] = useState(false)

  const [screenwidth, setscreenwidth] = useState(window.innerWidth)

    setInterval(()=>{
      let width = window.innerWidth;
      setscreenwidth(width)
    },10)
   

 
 
  return (
    <div className='h-full w-full   items-center flex-col flex  ' style={{
      backgroundColor: colors.primary
    }}>
      <div className='h-14 w-3/4  '>
        <div className='rounded-md w-full items-center p-2  h-14  flex-row flex 'style={{
          backgroundColor:colors.itemscolor
        }}>
       
          <FaSearch size={25} />
          <div className='w-full h-full  divide-x flex-row flex divide-solid'>
            <input
              className='p-2 w-4/6'
              style={{
                outline: "none",

              }}
              onChange={
                (e) => {
                  setsearch(e.target.value)
                 setshow(true)
                }
              } placeholder={"Job title,keywords,or company"} />
            <input
              className='p-2 w-2/6'
              style={{
                outline: "none",

              }}
              onChange={
                (e) => {
                  setsearch(e.target.value)
                }
              } placeholder={"City , State , Country"} />
          </div>
          <button className=' font-bold text-lg' style={{
            fontFamily:fontname,
            backgroundColor:colors.actioncolor
            ,color:colors.itemscolor
          }}>Find Jobs</button>
          
            
        </div>
      </div>
      <div className='w-full items-center  flex-row flex space-x-2 justify-center  '>
       

        <select className='w-1/6 h-9 mb-2 m-2  p-1 appearance-none  rounded'  style={{
         backgroundColor:colors.secondary
         ,color:colors.itemscolor


        }}
        
        
        >
          <option>Job Type</option>

          <option>Full Time</option>
          <option>Part Time</option>
          <option>Contract</option>
        </select>
        <select className='w-1/6 h-9 mb-2 m-2  p-1 appearance-none rounded' style={{
          backgroundColor: colors.secondary
          , color: colors.itemscolor


        }}


        >
          <option>Location</option>

          <option>Remote</option>
          <option>Hybrid</option>
          <option>On-site</option>
        </select>

        <select className='w-1/6 h-9 mb-2 m-2  p-1  appearance-none rounded' style={{
          backgroundColor: colors.secondary
          , color: colors.itemscolor


        }}


        >
          <option>Experience</option>

          <option>Less than a year</option>
          <option>1-3 years </option>
          <option>3-5 years</option>
          <option>5-10 years</option>
          <option>Manager Level</option>

        </select>
      


      </div>
      <div className='h-full w-full flex-row flex  '>
        <div className='flex-col flex w-full p-1 m-1 md:w-full'
        >
          <JobCard/>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
       

        </div>
        {
        screenwidth > 700?   <div className='h-3/4 w-full md:w-4/4'><JobDetails/> </div> :<></>
       
        }
      
        
      </div>
     
    </div>
    
  )
}

export default Home