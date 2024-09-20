import React, { useState } from 'react'
import './Temperature.css'
import mobile from './Assets/mobile.avif'


const Temperature = () => {
const[temp,setTemp]=useState(12);
const[color,setColor]=useState("#34495e");

const increment=(()=>{
  setTemp(temp+1);
  if(temp >= 18){
    setColor("red");
  }
  
})

const decrement=(()=>{
  setTemp(temp-1);
  if(temp <= 19){
    setColor("#34495e");
  }
})
  return (
    <div className='temparture'>
        <div className='temp-img'>
        <img src={mobile}></img>
        </div>
        <div className='temp-display'>
              <div className='actual-temp' style={{backgroundColor:color}}>{temp}°C</div>
              <div className='temp-btn'>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
              </div>
        </div>
      
    </div>
  )
}

export default Temperature
