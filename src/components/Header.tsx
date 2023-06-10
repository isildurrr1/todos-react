import { useEffect, useState } from "react";
const Header: React.FC = () => {
  const date: Date  = new Date();
  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthNow: string = months[date.getMonth()];
  const dayNow: string = days[date.getDay()];
  const todaysDate: number = date.getDate();
  const [temp, setTemp] = useState(0);
  const [usersSity, setUsersCity] = useState('');
  const [weatherIco, setWeatherIco] = useState('');
  const [weatherDiscription, setWeatherDiscription] = useState('');

  // useEffect(() => {
  //   fetch('https://api.ipbase.com/v2/info?apikey=yS0jC6imFFBUlQuVbJtUlgSdfNWQzRkRbUxOO3HO')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       const usersCity: string = data.data.location.city.name;
  //       fetch(`http://api.weatherapi.com/v1/current.json?key=40742ca164b54fa682350707231006&q=${usersCity}`)
  //         .then(res => {
  //           return res.json();
  //         })
  //         .then(data => {
  //           console.log(data);
  //         })
  //     })
  // },[])

  useEffect(() => {
    setTemp(11)
    setUsersCity('Novosibirsk');
    setWeatherIco("//cdn.weatherapi.com/weather/64x64/day/296.png")
    setWeatherDiscription("Light rain")
  }, [])

  return(
    <header className="header">
      {`${temp} °C`} {usersSity} {weatherDiscription}
      <img src={weatherIco} alt="ico" />
    </header>
  );
}

export default Header;