import React, { useState } from 'react'
import "./style.css"
import Menu from './Menuapi.js'
import MenuCard from './MenuCard'
import Navbar from './Navbar'
 const uniqueList=[
  ...new Set(
    Menu.map((curElem)=>{
      return curElem.category;
    })
  )
 ]
const Resturent = () => {
    
  const [menuData,setmenuData]= useState(Menu);
  const [menuList,setmenuList]= useState(uniqueList);
  const filterItem= (category)=>{
    const updateList = Menu.filter( (curElem)=>{
       return curElem.category === category;
    });
    setmenuData(updateList);
  };
   
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
      
    </>
  )
}

export default Resturent
    