import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DetailsPage } from '../pages/DetailsPage'
import { HomePage } from '../pages/HomePage'

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/:ciudad' element={<DetailsPage/>}/>
        </Routes>
    </>
  )
}
