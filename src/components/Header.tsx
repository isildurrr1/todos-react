import { useEffect, useState } from "react";
import { ReactComponent as GeoSvg } from 'src/image/geo.svg'
const Header: React.FC = () => {
  
  const ipApi: string = 'https://api.ipify.org/';
  const locationApi: string = 'http://ip-api.com/json/';
  const weatherApi: string = 'http://api.weatherapi.com/v1/current.json?key=40742ca164b54fa682350707231006&q='
  const date: Date  = new Date();
  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthNow: string = months[date.getMonth()];
  const dayNow: string = days[date.getDay()];
  const todaysDate: number = date.getDate();
  const [temp, setTemp] = useState(0);
  const [usersCity, setUsersCity] = useState('Your City');
  const [weatherIco, setWeatherIco] = useState('');
  const [weatherDiscription, setWeatherDiscription] = useState('');
  let usersIP: Promise<string> | string = ''

  useEffect(() => {
    fetch(ipApi)
      .then(ip => ip.text())
      .then(ip => usersIP = ip)
      .then(() => {
        fetch(`${locationApi}${usersIP}`)
        .then(data => data.json())
        .then(data => {
          const city = data.city;
          setUsersCity(data.city);
          fetch(`${weatherApi}${city}`)
            .then(res => {
              return res.json();
            })
            .then(data => {
              setTemp(data.current.temp_c);
              setWeatherIco(data.current.condition.icon);
              setWeatherDiscription(data.current.condition.text);
            })
        })
        })
  },[])

  return(
    <header className="header">
      <div className="header__weather-info">
        <h1 className="header__temp">{`${temp}°`}</h1>
        <div className="header__location">
          <span className="header__info">{`${dayNow},${todaysDate} ${monthNow}`}</span>
          <span className="header__info">
            <GeoSvg className="header__geo"/>
            {usersCity}</span>
        </div>
      </div>
      <div className="header__weather-ico">
        <img src={weatherIco} alt="ico" className="header__ico-image"/>
        <span className="header__info">{weatherDiscription}</span>
      </div>
    </header>
  );
}

export default Header;