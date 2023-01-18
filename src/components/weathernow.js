import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                <p>Погода в городе: {this.props.city}, {this.props.country}</p>
                <p>Температура: {this.props.temp}</p>
                <p>Влажность: {this.props.humidity} %</p>
                <p>Скорость ветра: {this.props.speed} м/с</p>
            </div>
        );
    }
}

export default Weather;