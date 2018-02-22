import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js';


class WeatherList extends Component {
   
    renderWeather(cityData) {

        const name = cityData.city.name;
        const id = cityData.city.id;
        const temps = cityData.list.map(weather => weather.main.temp);
        const prs = cityData.list.map(weather => weather.main.pressure);
        const hum = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={id}>
                <td>
                    {name}
                </td>
                <td>
                    <Chart data={temps} color="red" />
                </td>
                <td>
                    <Chart data={prs} color="grey" />
                </td>
                <td>
                    <Chart data={hum} color="blue" />
                </td>
            </tr>
        );
    }
    render() {

        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                City
                            </th>
                            <th>
                                Temperature
                            </th>
                            <th>
                                Pressure
                             </th>
                            <th>
                                Humidity
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}
export default connect(mapStateToProps)(WeatherList);                                                                                                                 