
import React from "react";
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "e7907fb61341a884c0af67d0ce2257cb"

class App extends React.Component { 

  gettingWeatherNow = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data.main.temp);
  }

  gettingWeather5Day = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data.list);
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
//                temp = {this.state.temp}
//                city = {this.state.city}
//                country={this.state.country}
//                sunrise={this.state.sunrise}
//                sunset={this.state.sunset}
//                error={this.state.error}
                />

          </div>
      );
  }
}


export default App;
