import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city}
            </div>
        );
    }
}

export default Weather;