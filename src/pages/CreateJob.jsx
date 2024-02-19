import React from 'react'
import { colors,fontname } from '../theme/colortheme'
function CreateJob() {
  return (
      <div className='h-screen w-full  justify-center  items-center flex-col flex flex-1  ' style={{
          backgroundColor: colors.primary
      }}>

          <div className=' w-full md:w-1/2 h-8/12  '>
              <div className=' w-full h-full p-5' style={{
                  backgroundColor: colors.itemscolor
              }}


              >
                  <p className='font-semibold text-3xl ' style={{
                      fontFamily: fontname
                  }}>Create Job Poster</p>
                  <div className='mt-10 items-start justify-start'>
                      <div className='w-full '>
                          <p className='font-semibold text-md ' style={{
                              fontFamily: fontname
                          }}>Job Title</p>
                          <input
                              className='p-2 w-4/6'
                              type='text'
                              style={{
                                  outline: "none",

                              }}
                              onChange={
                                  (e) => {

                                  }
                              } placeholder={"Job Title"} />
                      </div>
                      <div className='w-full '>
                          <p className='font-semibold text-md ' style={{
                              fontFamily: fontname
                          }}>Company Name</p>
                          <input
                              className='p-2 w-4/6'
                              type='text'
                              style={{
                                  outline: "none",

                              }}
                              onChange={
                                  (e) => {

                                  }
                              } placeholder={"Company Name"} />
                      </div>
                      <div className='w-full '>
                          <p className='font-semibold text-md ' style={{
                              fontFamily: fontname
                          }}>Country/city</p>
                          <input
                              className='p-2 w-4/6'
                              type='text'
                              style={{
                                  outline: "none",

                              }}
                              onChange={
                                  (e) => {

                                  }
                              } placeholder={"Country / City"} />
                      </div>
                      <div className='w-full flex-col flex space-x-2  '>
                          <p className='font-semibold text-md ' style={{
                              fontFamily: fontname
                          }}>Job Type</p>
                         
                              <select className='w-4/12 h-8 mb-2   p-1  rounded' style={{
                               borderWidth:'0.7px',
                                borderColor:colors.actioncolor,
                                color:colors.primary
                                
                                
                              }} >
                                <option>Full Time</option>
                              <option>Part Time</option>
                              <option>Contract</option>
                              </select>
                          
                      </div>
                      <div className='w-full flex-col flex space-x-2 '>
                          <p className='font-semibold text-md ' style={{
                              fontFamily: fontname
                          }}>Location Type</p>
                          <select className='w-4/12 h-8 mb-2   p-1  rounded' style={{
                              borderWidth: '0.7px',
                              borderColor: colors.actioncolor,
                              color: colors.primary


                          }} >
                              <option>On-site</option>
                              <option>Remote</option>
                              <option>Hybrid</option>
                          </select>
                      </div>
                      <div className='w-full '>
                          <p className='font-semibold text-md ' style={{
                              fontFamily: fontname
                          }}>Company Email Address</p>
                          <input
                              className='p-2 w-4/6'
                              type='address'
                              style={{
                                  outline: "none",

                              }}
                              onChange={
                                  (e) => {

                                  }
                              } placeholder={"Company Email Address"} />
                      </div>
                      <div className='w-full flex-row flex items-center space-x-2 '>
                          <p className='font-semibold text-md ' style={{
                              fontFamily: fontname,
                              cursor: 'pointer'
                          }}>Files Url</p>
                          <input
                              className='p-2 w-4/6'
                              type='email'
                              style={{
                                  outline: "none",

                              }}
                              onChange={
                                  (e) => {

                                  }
                              } placeholder={"Files Url"} />
                      </div>
                      <div className='w-full '>
                          <p className='font-semibold text-md ' style={{
                              fontFamily: fontname
                          }}>Job Details</p>
                          <textarea
                              className='p-2 h-32 w-full rounded-md'
                              type='textera'
                              style={{
                                  outline: "none",

                              }}
                              onChange={
                                  (e) => {

                                  }
                              } placeholder={"Location Address"} />
                      </div>
                      <div className=' justify-end items-end w-full h-24  text-black text-end flex-col flex'><div style={{
                          fontFamily: fontname,
                          color: colors.itemscolor,
                          backgroundColor: colors.actioncolor,
                          cursor: 'pointer'
                      }} className='text-lg font-semibold w-full h-8 text-center rounded-md'>Create Job</div></div>


                  </div>
                  
                </div>

          </div>
      </div>
  )
}

export default CreateJob