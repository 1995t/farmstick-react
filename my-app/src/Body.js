import React, { useEffect, useState } from 'react'
import Component from './Component'
import './Body.css'
import temp1 from './Images/temp.jpg'
import temp2 from './Images/humidity.png'
import temp3 from './Images/moisture.png'
import temp4 from './Images/water.png'
import temp5 from './Images/smoke.jpg'
import temp6 from './Images/fire.jpg'
import axios from 'axios'
function Body() {
    const { REACT_APP_API_ENDPOINT } = process.env;

    const [info,setInfo] = useState({});
    const getData = async() => {
        const {data} = await axios.get(`${REACT_APP_API_ENDPOINT}/getdata`)
        console.log(data);
        setInfo(data)
    }


    useEffect(() => {
        const interval = setInterval(() => {
            getData();
        }, 5000);
      
        return () => clearInterval(interval);
      }, [info]);

  return (
    <>
            <div className='home'>
               <div>
                <Component 
                    name="Temperature"
                    img = {temp1}
                    data={info.temperature}
                />
                <Component
                    name="Humidity"
                    img= {temp2}
                    data={info.humidity}
                />
               </div>
               <div>
                <Component
                    name="Moisture"
                    img= {temp3}
                    data={info.moisture}
                />
                <Component
                    name="Motor"
                    img= {temp4}
                    data={info.motor}
                />
               </div>
               <div>
                <Component
                   name="Smoke"
                   img= {temp5}
                   data={info.smoke}
                />
                <Component
                   name="Fire"
                   img= {temp6}
                   data={info.smoke}
                />
            </div>
            </div>
    </>
  )
}

export default Body