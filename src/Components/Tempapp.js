import React, { useEffect, useState } from 'react';
import "./css/style.css"

const Tempapp = () => {


    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Delhi");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bf46c27c2a782e1c3eb437c81bf12e8e`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    },[search] )

    return ( 
        <>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    className="inputField"
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value)
                    }} />
                </div>

        {
            !city ? (
                <p className="errorMsg">No Data Found. Please Enter City Name Properly. </p>
            ) : (
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp"> {city.temp}° Celsius </h1>
            <h2 className="feel">Feels Like : {city.feels_like}° Celius</h2>
            <h3 className="tempmin_max">Min : {city.temp_min}° C || Max : {city.temp_max}° C</h3>
            <h3 className="tempmin_max">Pressure : {city.pressure} Pa || Humidity : {city.humidity}%</h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>)
        }    
            </div>
        </>
     );
}
 
export default Tempapp;