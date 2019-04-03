import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PrayerTimes from './PrayerTimes';
import Compass from './Compass';
// import prayerTimes from './prayerTimes'

// input ==> takes value of input and passes it as argument to the on click function 
// Button
// onClick ==> calls function and passes argument 
// argument ==> inserted within url as city name 


class App extends Component {

  state = {
    cityname: ''
  }

  changeHandler = (e) => {
    let data = { ...this.state } //clones the state

    data[e.target.name] = e.target.value

    this.setState(data)
  }

  submitHandler = () => { //this needs to change to click function 
    axios.get(`https://cors-anywhere.herokuapp.com/https://muslimsalat.com/${this.state.cityname}/daily.json?key=9ab533462042508648d35fda77c55117`)
      .then(response => {
        console.log(response.data.items[0]);
        console.log(response.data);


        let city = response.data.city;
        let country = response.data.country;
        let fajr = response.data.items[0].fajr;
        let dhuhr = response.data.items[0].dhuhr;
        let asr = response.data.items[0].asr;
        let maghrib = response.data.items[0].maghrib;
        let isha = response.data.items[0].isha;
        let shurooq = response.data.items[0].shurooq;
        let date = response.data.items[0].date_for;
        let qibla = response.data.qibla_direction;
        let latitude = response.data.latitude;
        let longitude = response.data.longitude;
        this.setState({
          fajr: fajr, dhuhr: dhuhr, asr: asr, maghrib: maghrib, isha: isha, shurooq: shurooq,
          date: date, country: country, city: city, qibla: qibla, latitude: latitude, longitude: longitude
        })

      })
  }


  render() {
    return (
      <div >
        <div className="hangingLights">
          {/* <img src="https://www.shariahboard.org/images/qandeel1.png" /> */}
        </div>

        <div className="prayerTimes">
          <h1> Prayer Times </h1>
          <p>Please enter a city to get it's prayer times</p>
          <input name="cityname"
            value={this.state.cityname} onChange={this.changeHandler} />



          <button onClick={this.submitHandler}> Search </button>

          {/* <img src="http://icons.iconarchive.com/icons/icons-land/sport/256/Compass-icon.png" /> */}

          <PrayerTimes prayers={this.state} />
          <br></br>
          <img src="https://bethanmaybooks.files.wordpress.com/2018/08/pagebreak.png" width="800x700" />
          <br></br>


          <div>
            <h1> Qibla Direction</h1>

            <h4>Qibla Diections of {this.state.cityname} </h4>
            <table width="40%">
              <tr>
                <td>Direction </td>
                <td width="60%">{this.state.qibla} </td>
              </tr>
              <tr>
                <td>Latitude: </td>
                <td width="60%">{this.state.latitude} </td>
              </tr>
              <tr>
                <td>Longitude: </td>
                <td width="60%">{this.state.longitude} </td>
              </tr>
            </table>
          </div>

          <br></br> <br></br>

          {/* .container
  .compass
    .directions
      .E
        p E
      .W
        p W
      .S
        p S
      .N
        p N
    //- -for(var a=0;a<60;a++)
      .lines
    .cover
    .needle
      .main
      .circle */}



          <div className="container">
            <div className="compass">
           

              <div className="cover">
              </div>
{/* style = {{transform: `rotate(${Number(this.state.qibla) +90}deg)` }*/}
              <div className="needle" style = {{transform: `rotate(${Number(this.state.qibla) +90}deg)` }} >

                <div className="main">
                </div>
               
              </div>





            </div>
          </div>


          <br></br><br></br><br></br>
          <img src="https://bethanmaybooks.files.wordpress.com/2018/08/pagebreak.png" width="800x700" />
          <br></br> <br></br><br></br>


          <h1>Watch Live Video of Makkah, Saudi Arabia </h1>
          {/* youtubelink */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7BE8NxMhwas" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>

      </div>
    );
  }
}
export default App;
