import React from 'react'
import { Link } from 'react-router-dom'
import "../css/launchnumber.css"
import LaunchInfo from './LaunchInfo'
function LaunchNumber({data,setHide,setLaunchDetail }) {
  return (
    <div className='launchNumberContainer'>
        <div>
            {/* <Link to = '/launches'> */}
              <img className='LaunchImage' src = {data.links.patch.small} onClick = {() => {setHide(true);setLaunchDetail(data)}}/>
            {/* </Link> */}
        </div>
    </div>
  )
}

export default LaunchNumber