import { useEffect, useState } from "react";
import { ReactComponent as GeoSvg } from 'src/image/geo.svg';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Header: React.FC = () => {
  // API
  const ipApi = 'https://api.ipify.org/'; // api to get user ip
  const locationApi = 'https://ipapi.co/'; // api to get the user's city
  const weatherApi = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' // api for getting actual weather
  // DATE
  const date: Date = new Date(); // create a new date instance
  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // array with days of the week
  const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; // array with months
  const monthNow: string = months[date.getMonth()]; // get current month
  const dayNow: string = days[date.getDay()]; // get the current day of the week
  const todaysDate: number = date.getDate(); // get the current day of the month
  // STATES
  const [temp, setTemp] = useState(0); // temperature state
  const [usersCity, setUsersCity] = useState('Your City'); // user city state
  const [weatherIco, setWeatherIco] = useState(''); // state weather icon
  const [weatherDiscription, setWeatherDiscription] = useState(''); // state weather description
  const [loading, setLoading] = useState(false);

  // we get weather data via ip when rendering the application
  useEffect(() => {
    let usersIP: Promise<string> | string = ''; // variable to store IP string
    setLoading(true);
    fetch(ipApi)
      .then(ip => ip.text())
      .then(ip => usersIP = ip)
      .then(() => {
        fetch(`${locationApi}${usersIP}/json`)
          .then(data => data.json())
          .then(data => {
            const city = data.city;
            setUsersCity(data.city);
            fetch(`${weatherApi}${city}`,
              {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': '843c951890mshf9ad6e12819402ap1be309jsn943965c5efb4',
                  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
              }
            )
              .then(res => {
                return res.json();
              })
              .then(data => {
                setTemp(data.current.temp_c);
                setWeatherIco(data.current.condition.icon);
                setWeatherDiscription(data.current.condition.text);
                setLoading(false);
              })
          })
      })
  }, [])

  return (
    <header className="header">
      {loading ?
      <Box sx={{ width: '100%', margin: 'auto' }}>
        <LinearProgress />
      </Box>
      :
      <>
        <div className="header__weather-info">
          <h1 className="header__temp">{`${temp}°`}</h1>
          <div className="header__location">
            <span className="header__info">{`${dayNow},${todaysDate} ${monthNow}`}</span>
            <span className="header__info">
              <GeoSvg className="header__geo" />
              {usersCity}</span>
          </div>
        </div>
        <div className="header__weather-ico">
          <img src={weatherIco} alt="ico" className="header__ico-image" />
          <span className="header__info">{weatherDiscription}</span>
        </div>
      </>
      }
    </header>
  );
}

export default Header;