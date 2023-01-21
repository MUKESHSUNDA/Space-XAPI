import React, { useEffect, useState } from 'react'
import LaunchCard from './LaunchCard'
import "../css/LaunchPad.css"
import { Link } from 'react-router-dom'
function LaunchPad({spaceXData,spaceXDataLaunches,setHide,setLaunchDetail }) {
  return (
    <div className='LaunchPadcontainer'>

        <div className='spaceXList'>
            {spaceXData.map((data,idx) => {
                return <LaunchCard
                        LaunchData = {data} 
                        spaceXDataLaunches = {spaceXDataLaunches}
                        key = {data.id} 
                        setHide = {setHide}
                        setLaunchDetail = {setLaunchDetail}
                       />
            })}
        </div>
    </div>
    
  )
}

export default LaunchPad