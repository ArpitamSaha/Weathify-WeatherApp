import React, { useState } from 'react'
import './HomePage.scss'
import API_Fetch from '../../Components/API_Fetch';
import {useNavigate} from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    const [city , setCity] = useState('');
    const search = (e) => {
        setCity(e.target.value);
        // console.log(city)
    }
    const searchCity = async () =>{
        let cityName = city;
        // console.log(cityName);
        if(cityName === '')
            document.getElementById('').innerHTML = "Please enter a city name 📌";
        else{
            let data = await API_Fetch(cityName);
            if(data.ok){
                navigate('/DataPage' , {state: { cityName }})
                }
            else
                document.getElementById('error').innerHTML = "Please enter a valid city name 📌";
            
        }
    }


  return (
    <div className='container'>
        <div className="input-group rounded">
            <input type="search" className="form-control rounded search-bar" onChange={search} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button className="input-group-text border-0" id="search-addon" onClick={searchCity}>
                Search
            </button>
        </div>
        <div id='error'>
    
        </div>
    </div>
  )
}

export default HomePage