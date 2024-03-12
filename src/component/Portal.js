import { Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Portal() {
  return (
    <div className='Portal'>
        <Toolbar/>
        <Outlet/>    
    </div>
    
  )
}
