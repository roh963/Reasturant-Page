import React, { useState } from 'react'
import "./style.css"
import Menu from './Menuapi.js'
const Resturent = () => {

   const [menuData,setmenuData]= useState(Menu);
   
  return (
    <>
    <div className='card-container'>
          <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle ">1</span>
                <span className="card-author   subtile ">breakfast</span>
                <h2 className="card-title">Maggi</h2>
                <span className="card-description subtle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi quasi quas officiis eligendi exercitationem.       
                </span>
                <div className="card-read">Read</div>
            </div>
            {/* <img src={image} alt="image" className="card-media" /> */}
            <span className="card-log subtle">Order Now</span>
          </div>   
    </div>
    </>
  )
}

export default Resturent
    