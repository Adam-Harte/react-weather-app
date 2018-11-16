import React, { Component } from 'react';
import axios from '../../axios';

import WeatherDisplay from '../../Components/Weather/WeatherDisplay/WeatherDisplay';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';

class Weather extends Component {
   state = {
      data: [],
      loading: true,
      query: "weather",
      location: "",
      metrics: "celsius"
   }

   componentDidMount() {
      axios.get(this.state.query + '?q=London&units=metrics&APPID=34d867e6bd0decb3b401e02be6a10993')
         .then(res => {
            console.log(res);
            const newData =[];
            newData.push(res.data);
            this.setState({ data: newData, loading: false });
         })
         .catch(err => {
            console.log(err);
         });
   }

   locationChangeHanlder = (event) => {
      this.setState({location: event.target.value});
   }

   searchWeatherHandler = () => {
      axios.get(this.state.query + '?q=' + this.state.location + '&APPID=34d867e6bd0decb3b401e02be6a10993')
         .then(res => {
            console.log(res);
            let newData = [];
            if (this.state.query === "forecast") {
               newData = res.data.list;
            } else {
               newData.push(res.data);
            }
            this.setState({ data: newData, loading: false });
         })
         .catch(err => {
            console.log(err);
         });
   }

   toggleQuery = query => {
      this.setState({query: query});
   }

   toggleMetrics = metric => {
      this.setState({metrics: metric});
   }

   render() {
      let content = <Spinner />

      if (!this.state.loading) {
         content = this.state.data.map((data, index) => {
            return <WeatherDisplay key={index} metric={this.state.metrics} data={data} />
         })
      }
      return (
         <div>
            <Input inpType="text" inpPlaceholder="Location" inpValue={this.state.location} changed={this.locationChangeHanlder} />
            <Button btnStyle="Success" clicked={this.searchWeatherHandler}>Search</Button>
            <Button btnStyle="Success" clicked={() => this.toggleQuery('weather')}>Weather</Button>
            <Button btnStyle="Cancel" clicked={() => this.toggleQuery('forecast')}>Forecast</Button>
            <Button btnStyle="Success" clicked={() => this.toggleMetrics('celsius')}>C</Button>
            <Button btnStyle="Cancel" clicked={() => this.toggleMetrics('fahrenheit')}>F</Button>
            {content}
         </div>
      );
   }
}

export default Weather;