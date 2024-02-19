import React from 'react'
import { colors, fontname } from '../../theme/colortheme'

function login() {
  return (
    <div className='h-screen w-full  justify-center  items-center flex-col flex flex-1  ' style={{
      backgroundColor:colors.primary
    }}>

      <div className=' w-full md:w-1/2 h-1/2  '>
        <div className=' w-full h-full p-5' style={{
          backgroundColor:colors.itemscolor
        }}
        
        
        >
          <p className='font-semibold text-3xl ' style={{
            fontFamily:fontname
          }}>Login</p>
          <div className='mt-10 items-start justify-start'>
            <div className='w-full '>
              <p className='font-semibold text-md ' style={{
                fontFamily: fontname
              }}>E-mail</p>
              <input
                className='p-2 w-4/6'
                type='email'
                style={{
                  outline: "none",

                }}
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
            <p className='font-semibold text-md ' style={{
              fontFamily: fontname,
              cursor:'pointer'
            }}>Forgot Password ?</p>
            
          </div> 
          <div className=' justify-end items-end w-full h-2/4  text-black text-end flex-col flex'><div style={{
            fontFamily:fontname,
            color:colors.itemscolor,
            backgroundColor:colors.actioncolor,
            cursor:'pointer'
          }} className='text-lg font-semibold w-14 h-8 text-center rounded-md'>Login</div></div>
        </div>
     
      </div>
    </div>
  )
}

export default login