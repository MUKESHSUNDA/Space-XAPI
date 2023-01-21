import React from 'react'
import "../css/launchInfo.css"
function LaunchInfo({launchDetail,setHide}) {
  const reused = launchDetail.fairings == null || launchDetail.fairings.reused == null ? "Not Available": 
                launchDetail.fairings.reused == true ? "Reused" : "Not Reused";
  const details = launchDetail.details == null ? "Details Not Available" : launchDetail.details
  console.log("the reused value is "+launchDetail.date_local)
  return (
    <div className='launchContainer'>
      <div className='launchTitle'>Description of a Launch</div>
    <div className='launchBody' >
        <div className='launchImage'>
        <img src = {launchDetail.links.patch.large} alt = "image is loading..." className='launchInfoImage' />
        </div>
        <div className='launchDescription'>
          <div className='heading'>{launchDetail.name}</div>
          <div className='launch_date'>Launch Date : {launchDetail.date_local.slice(0,10)}</div>
          <div className='launch_details'> 
            {details.slice(0,200)}
            {details.length > 200 ? ".......":""}
        </div>
          <div className='launch_details'>Fairings : {reused}</div>
          <div className='back'  onClick={() => {setHide(false)}}>
            Back</div>
        </div>
      </div>
    </div>
  )
}

export default LaunchInfo