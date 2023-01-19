
import React from "react";
import Form from './components/form';
import Weather from './components/weathernow';

const API_KEY = "e7907fb61341a884c0af67d0ce2257cb"

class App extends React.Component { 

  //state = {
  //  temp: undefined,
  //  city: undefined,
  //  country: undefined,
  //  humidity: undefined,
  //  speed: undefined,
  //  error: undefined
  //}
  state = {
    list: []
  }

  gettingWeatherNow = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);

    this.setState ({
      city: data.name,
      list: [ {
        dt_txt: (new Date()).toString(),
        dt: data.dt,
        temp: data.main.temp,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        error: ""
      },
  ]})
}

  gettingWeather5Day = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);

    this.setState ({
      city: data.city.name,
      list:  
        data.list.map(st => {
          return {
            dt_txt: st.dt_txt,
            dt: st.dt,
            temp: st.main.temp,
            humidity: st.main.humidity,
            speed: st.wind.speed,
          }
        }
      ),
    })
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

              {this.state.list.map(st => 
                 <div key={st.dt}>
                 <Weather
                 dt_txt = {st.dt_txt}
                 temp = {st.temp}
                 country = {st.country}
                 humidity = {st.humidity}
                 speed = {st.speed}
                 />
                </div>
                 )}
            

          </div>
      );
  }
}


export default App;
