import React, { useState } from 'react'
import "./style.css"
import Menu from './Menuapi.js'
import MenuCard from './MenuCard'
const Resturent = () => {

   const [menuData,setmenuData]= useState(Menu);
   
  return (
    <>
      <MenuCard menuData={menuData} />
      
    </>
  )
}

export default Resturent
    