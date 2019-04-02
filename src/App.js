import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PrayerTimes from './PrayerTimes';
// import prayerTimes from './prayerTimes'

// input ==> takes value of input and passes it as argument to the on click function 
// Button
// onClick ==> calls function and passes argument 
// argument ==> inserted within url as city name 


class App extends Component {

  state = {
    cityname :''
  }

  changeHandler = (e) => {
    let data = {...this.state} //clones the state

    data[e.target.name] = e.target.value

    this.setState(data)
  }

  submitHandler = () => { //this needs to change to click function 
    axios.get(`https://cors-anywhere.herokuapp.com/https://muslimsalat.com/${this.state.cityname}/daily.json?key=9ab533462042508648d35fda77c55117`)
      .then(response => {
        console.log(response.data.items[0]);


        let fajr = response.data.items[0].fajr;
        let dhuhr = response.data.items[0].dhuhr;
        let asr = response.data.items[0].asr;
        let maghrib = response.data.items[0].maghrib;
        let isha = response.data.items[0].isha;
        let shurooq = response.data.items[0].shurooq;
        let date = response.data.items[0].date_for;
        this.setState({ fajr: fajr, dhuhr: dhuhr, asr: asr, maghrib: maghrib, isha: isha, shurooq: shurooq, date:date })

      })
  }


  render() {
    return (
      <div > 
        <div className="prayerTimes">
        <h1> Prayer Times </h1>
        <h4>Please enter a city to get it's prayer times</h4>
          <input name="cityname" 
          value={this.state.cityname} onChange={this.changeHandler} />

  

  

        {/* <h1> The Prayer Times Today </b>' + '(' + times.items[0].date_for + ')'
            + '<b> in </b>' + cityName.toUpperCase() + ', '+ times.country.toUpperCase() +'<b> is: </b> <br>'</h1> */}

        <button onClick={this.submitHandler}> Search </button>
        <h4>The prayer times for today:  </h4>
        <PrayerTimes prayers={this.state} />
        
        </div>

      </div>
    );
  }
}
export default App;
