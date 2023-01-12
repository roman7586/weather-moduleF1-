
import React from "react";
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "e7907fb61341a884c0af67d0ce2257cb"

class App extends React.Component { 

  gettingWeather = async () => {
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
      return (
          <div>
              <Form/>
              <Weather/>
          </div>
      );
  }
}


export default App;
