
import React from "react";
import Form from './components/form';
import Weather from './components/weathernow';

const API_KEY = "e7907fb61341a884c0af67d0ce2257cb"

class App extends React.Component { 

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    speed: undefined,
    error: undefined
  }

  gettingWeatherNow = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);


      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        error: ""
      });

  }

  gettingWeather5Day = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    var period = e.target.elements.period.value;
    if (period === "forecast") {
        await this.gettingWeather5Day(e);
      } else {
        await this.gettingWeatherNow(e);
      }
  }

  render() {
      return (
          <div>
              <Form weatherMethod={this.gettingWeather} />
              <Weather 
                temp = {this.state.temp}
                city = {this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                speed = {this.state.speed}
                error = {this.state.error}
                />

          </div>
      );
  }
}


export default App;
