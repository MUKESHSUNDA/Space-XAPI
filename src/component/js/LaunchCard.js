import React, { useEffect, useState } from 'react'
import "../css/launchCard.css"
import LaunchNumber from './LaunchNumber';
function LaunchCard({LaunchData,spaceXDataLaunches,setHide,setLaunchDetail }) {
    const imageUrl = LaunchData.images.large[0];
    const details = LaunchData.details
    const str = LaunchData.status
    const status = str.charAt(0).toUpperCase() + str.slice(1);
    const [full,setFull] = useState(false)
    const [text,setText] = useState("More")
  return (
    <div className='launchCardContainer'>
        <img className='imageLaunchCard' src = {imageUrl} />
        <h1>{LaunchData.name}</h1>
        <p  className='launchDataDetails'>
            {full == true ? details :details.slice(0,200)}
            {full == false && details.length > 200 ? ".......":""}
        </p>
        <div className='readMore' onClick={() => {setFull(!full);setText("Less")}}>Read {text}</div>
        <p style = {{color: status == "Retired" ? 'red' : status=="Active" ?'green':'#996767'}}> 
            <span style ={{'font-weight' :"800" ,'font-size':'26px'}}>Status: </span>  {status}
        </p>

        <div >
            <div className='launchimageHeading'>Top 3  Launches</div>
            <div style={{'display':'flex', 'justify-content':'space-between'}}>
            { LaunchData.launches.length > 0 ?(
                
                LaunchData.launches.map((item,index)=>{
                    if(index > 2) return;
                    return spaceXDataLaunches.map((data,idx) => {
                            // console.log(item + ' ',data.id)
                            if(data.id === item) 
                            return <div>
                                <LaunchNumber data = {data} setHide = {setHide} setLaunchDetail = {setLaunchDetail}/>
                            </div> 
                        })
                })
                )
                :
                <div className='notAvailable'>No Launches Available</div>
            }
        </div>
    </div>
    </div>
  )
}

export default LaunchCard