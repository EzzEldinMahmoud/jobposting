import React from 'react'
import { colors } from '../../theme/colortheme'

function Footer() {
  return (
        <div className='justify-end w-full h-full p-2  text-md font-semibold ' style={{
            backgroundColor: colors.primary,
            color: colors.itemscolor
        }}>Copyright &copy;2021 RemotJobs</div>
    
  )
}

export default Footer