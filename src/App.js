import './App.css';
import LaunchPad from './component/js/LaunchPad';
import React, { useEffect, useState } from 'react'
import LaunchInfo from './component/js/LaunchInfo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
function App(){
    const [spaceXData,setSpaceXData] = useState([]);
    const [launchDetail,setLaunchDetail] = useState();
    const [hide,setHide] = useState(false);
    const getData = async () => {
        const response = await fetch('https://api.spacexdata.com/v4/launchpads');
        const data = await response.json();
        setSpaceXData(data);
    }

    useEffect(() => {
         getData();
    },[])
   
    // // fetching the api for launches

    const [spaceXDataLaunches,setSpaceXDataLaunches] = useState([]);

    const getDataLaunches = async () => {
        const response = await fetch('https://api.spacexdata.com/v4/launches');
        const data = await response.json();
        setSpaceXDataLaunches(data);
    }

    useEffect(() => {
         getDataLaunches();
    },[])

  return (
       <div className="App">
        {/* hello */}
        {
          hide == false ?
          <LaunchPad 
              spaceXData = {spaceXData} 
              spaceXDataLaunches = {spaceXDataLaunches} 
              setHide = {setHide} 
              setLaunchDetail = {setLaunchDetail}
          />
         : <LaunchInfo launchDetail = {launchDetail} setHide = {setHide}/>
        }
       </div>

  );
}

export default App;

{/* <div className="App">
      <div className='title'>LaunchPad</div>
        <Route path = "/launches">
          <LaunchInfo/>
        </Route>
        <Route path = "/">
        <LaunchPad spaceXData = {spaceXData} 
  
          spaceXDataLaunches = {spaceXDataLaunches}/>
          
          {/* <p>{JSON.stringify(spaceXData)}</p> */}
        {/* {spaceXData.length > 0 &&  <LaunchPad spaceXData = {spaceXData}  */}
          {/* spaceXDataLaunches = {spaceXDataLaunches} */}
        {/* // />} */}
        
        // </Route>
    // </div> */}