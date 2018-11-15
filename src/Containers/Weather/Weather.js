import React, { Component } from 'react';
import axios from '../../axios';

import WeatherDisplay from '../../Components/Weather/WeatherDisplay/WeatherDisplay';
import Spinner from '../../Components/UI/Spinner/Spinner';

class Weather extends Component {
   state = {
      data: null,
      loading: true
   }

   componentDidMount() {
      axios.get('?q=London&APPID=34d867e6bd0decb3b401e02be6a10993')
         .then(res => {
            console.log(res);
            this.setState({ data: res.data, loading: false });
         })
         .catch(err => {
            console.log(err);
         });
   }

   render() {
      let content = <Spinner />

      if (!this.state.loading) {
         content = <WeatherDisplay data={this.state.data} />
      }
      return (
         <div>
            {content}
         </div>
      );
   }
}

export default Weather;