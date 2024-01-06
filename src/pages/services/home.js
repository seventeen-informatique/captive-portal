import React, {useState, useEffect} from "react";

const WeatherComponent = () => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_APIKEY;
    const city = "Lyon";
    const [temperature, setTemperature] = useState('0');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        const getWeather = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                if(!response.ok){
                    throw new Error(response.statusText);
                }

                const data = await response.json();
                setTemperature(data.main.temp);
                setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                console.log(data)
            } catch (error){
                console.log('Une erreur est survenue lors de la tentative de requête');
            }
        }
        getWeather();
    }, [apiKey, city]);
    return (
        <div className="meteo-compo">
            <div>
                <img src={icon} alt="Icone meteo"/>
            </div>
            <div>
                <p className="meteo-city">{city}</p>
                <p className="meteo-temperature">{temperature}°C</p>
            </div>
        </div>
    );
}

export default function ServicesHome() {
    return (
        <main id="page-services">
            <section className="page-padding">
                <div>
                    <h1>Nos Services</h1>
                </div>
                <div className="services-container">
                    <div>
                        <h2>Wifi-Connect</h2>
                    </div>
                    <div>
                        <h2>Service 2</h2>
                    </div>
                    <div className="meteo">
                        <h2>Météo</h2>
                        <WeatherComponent/>
                    </div>
                    <div>
                    <h2>Service 4</h2>
                    </div>
                </div>
            </section>
        </main>
    );
}