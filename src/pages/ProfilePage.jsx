import React from 'react'
import { colors, fontname } from '../theme/colortheme'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { Link } from 'react-router-dom'

function ProfilePage() {
  return (
      <div className='h-screen w-full  justify-center  items-center flex-col flex flex-1  ' style={{
          backgroundColor: colors.primary
      }}>

          <div className=' w-full md:w-5/6 m-1    flex-wrap flex-1 flex '>
              <div className=' w-full h-full p-5 rounded-md' style={{
                  backgroundColor: colors.itemscolor
              }}


              >
                <div className='flex-row flex w-full justify-between  items-center'> <p className='font-semibold text-3xl ' style={{
                      fontFamily: fontname
                  }}>My Profile</p>
                  <div className='flex-row flex items-center space-x-2'>
                          <Link to={'/create'} className='flex-row flex items-center space-x-2 border-2 border-gray p-1' style={{
                              borderBlockColor: colors.actioncolor,

                              cursor: 'pointer'

                          }} >
                              <MdWork size={25} color={colors.actioncolor} />
                              <p className='font-semibold text-md' style={{
                                  fontFamily: fontname
                              }}>Create Job</p>

                          </Link>
                          <div className='flex-row flex items-center space-x-2 border-2 border-gray p-1' style={{
                              borderBlockColor: colors.actioncolor,

                              cursor: 'pointer'

                          }}>
                              <FaEdit size={25} color={colors.actioncolor} />
                              <p className='font-semibold text-md' style={{
                                  fontFamily: fontname
                              }}>Edit Profile</p>

                          </div>

                  </div>
                 
                  </div>
                 
                  <div className='mt-10 items-start justify-start'>
                      
                      <div className='mt-10 items-start justify-start'>
                          <div className='w-full '>
                              <p className='font-semibold text-md ' style={{
                                  fontFamily: fontname
                              }}>Name</p>
                              <input
                                  className='p-2 w-4/6'
                                  type='email'
                                  style={{
                                      outline: "none",

                                  }}
                                  defaultValue={"Ezzeldin mahmoud"}
                                  onChange={
                                      (e) => {

                                      }
                                  } placeholder={"Name"} />
                          </div>
                          <div className='w-full '>
                              <p className='font-semibold text-md ' style={{
                                  fontFamily: fontname
                              }}>E-mail Address</p>
                              <input
                                  className='p-2 w-4/6'
                                  type='email'
                                  style={{
                                      outline: "none",

                                  }}
                                  defaultValue={"email@gmail.com"}
                                  onChange={
                                      (e) => {

                                      }
                                  } placeholder={"Email Address"} />
                          </div>
                          <div className='w-full '>
                              <p className='font-semibold text-md ' style={{
                                  fontFamily: fontname
                              }}>Password</p>
                              <input
                                  className='p-2 w-4/6'
                                  type='password'
                                  style={{
                                      outline: "none",

                                  }}
                                  onChange={
                                      (e) => {

                                      }
                                  } placeholder={"Password more than 6 letters"} />
                          </div>
                          <div className='w-full mt-5  flex  flex-grow flex-col '>
                              <p className='font-semibold text-3xl ' style={{
                                  fontFamily: fontname
                              }}>My Job posting</p>
                             <ul className=" flex-col flex  ">
                                <li className='mt-2 h-14'>
                                    <div className='flex-row flex w-full'>
                                        <div className='flex-col flex w-full '>
                                              <div className='flex-row flex items-center'>
                                                  <p className='text-xl font-semibold'> React developer</p>
                                                  <p className='text-md font-semibold ml-4 rounded-md  p-1' style={{
                                                    backgroundColor:colors.actioncolor
                                                    ,color:colors.itemscolor
                                                  }} > Full Time</p>
                                                  <p className='text-md font-semibold ml-4 rounded-md  p-1' style={{
                                                      backgroundColor: colors.secondary
                                                      , color: colors.itemscolor
                                                  }} > Applicants : 489</p>

                                              </div>
                                              <p className='text-sm font-semibold'> Company name</p>

                                        </div>
                                        <div  className='flex-row flex items-center'>
                                            <FaEdit size={20} color={colors.actioncolor} style={{
                                                  cursor: 'pointer'
                                            }}/>
                                            <FaTrash size={20} style={{
                                                marginLeft:10,
                                                cursor:'pointer'
                                            }} color='red'/>
                                        </div>

                                    </div>
                                </li>
                                  <li className='mt-2 h-14'>
                                      <div className='flex-row flex w-full'>
                                          <div className='flex-col flex w-full '>
                                              <div className='flex-row flex items-center'>
                                                  <p className='text-xl font-semibold'> React developer</p>
                                                  <p className='text-md font-semibold ml-4 rounded-md  p-1' style={{
                                                      backgroundColor: colors.actioncolor
                                                      , color: colors.itemscolor
                                                  }} > Full Time</p>
                                                  <p className='text-md font-semibold ml-4 rounded-md  p-1' style={{
                                                      backgroundColor: colors.secondary
                                                      , color: colors.itemscolor
                                                  }} > Applicants : 489</p>

                                              </div>
                                              <p className='text-sm font-semibold'> Company name</p>

                                          </div>
                                          <div className='flex-row flex items-center'>
                                              <FaEdit size={20} color={colors.actioncolor} style={{
                                                  cursor: 'pointer'
                                              }} />
                                              <FaTrash size={20} style={{
                                                  marginLeft: 10,
                                                  cursor: 'pointer'
                                              }} color='red' />
                                          </div>

                                      </div>
                                  </li>
                                  <li className='mt-2 h-14'>
                                      <div className='flex-row flex w-full'>
                                          <div className='flex-col flex w-full '>
                                              <div className='flex-row flex items-center'>
                                                  <p className='text-xl font-semibold'> React developer</p>
                                                  <p className='text-md font-semibold ml-4 rounded-md  p-1' style={{
                                                      backgroundColor: colors.actioncolor
                                                      , color: colors.itemscolor
                                                  }} > Full Time</p>
                                                  <p className='text-md font-semibold ml-4 rounded-md  p-1' style={{
                                                      backgroundColor: colors.secondary
                                                      , color: colors.itemscolor
                                                  }} > Applicants : 489</p>

                                              </div>
                                              <p className='text-sm font-semibold'> Company name</p>

                                          </div>
                                          <div className='flex-row flex items-center'>
                                              <FaEdit size={20} color={colors.actioncolor} style={{
                                                  cursor: 'pointer'
                                              }} />
                                              <FaTrash size={20} style={{
                                                  marginLeft: 10,
                                                  cursor: 'pointer'
                                              }} color='red' />
                                          </div>

                                      </div>
                                  </li>
                             </ul>
                          </div>

</div>
                  </div>
                 
              </div>

          </div>
      </div>
  )
}

export default ProfilePage