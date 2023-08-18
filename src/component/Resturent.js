import React, { useState } from 'react'
import "./style.css"
import Menu from './Menuapi.js'
import MenuCard from './MenuCard'
const Resturent = () => {
    

   const [menuData,setmenuData]= useState(Menu);
   const filterItem= (category)=>{
     const updateList = Menu.filter( (curElem)=>{
        return curElem.category === category;
     });
     setmenuData(updateList);
   };
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
            <button className="btn-group__item" onClick={()=>filterItem("breakfast")} >Breakfast</button>
            <button className="btn-group__item" onClick={()=>filterItem("lunch")} >Lunch</button>
            <button className="btn-group__item" onClick={()=>filterItem("evening")} >Evening</button>
            <button className="btn-group__item" onClick={()=>filterItem("dinner")}  >Dinner</button>
            <button className="btn-group__item" onClick={()=>setmenuData(Menu)}  >ALL</button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
      
    </>
  )
}

export default Resturent
    