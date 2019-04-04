import React from 'react'

const PrayerTimes = (props) => {
  let display;
  if (props.prayers.cityname) {
    display = <div><p> <b>The prayer times in</b> {props.prayers.cityname}, {props.prayers.country}  </p><p><b>Today's Date:</b> {props.prayers.date} </p> </div>
  }
  return (
    <div className="prayerTimes">
      {display}

      <table width="40%">
        <tr>
          <th>Prayer </th>
          <th>Time</th>
        </tr>

        <tr>
          <td>Fajr Prayer </td>
          <td>{props.prayers.fajr} </td>
        </tr>

        <tr>
          <td width="70%">Dhuhr Prayer</td>
          <td width="30%"> {props.prayers.dhuhr}  </td>
        </tr>

        <tr>
          <td>Asr Prayer </td>
          <td> {props.prayers.asr}  </td>
        </tr>

        <tr>
          <td>Maghrib Prayer</td>
          <td> {props.prayers.maghrib}</td>
        </tr>

        <tr>
          <td>Isha Prayer </td>
          <td> {props.prayers.isha} </td>
        </tr>

        <tr>
          <td>Sunrise Time (Shurooq) </td>
          <td> {props.prayers.shurooq}</td>
        </tr>

      </table>

    </div>
  )
}

export default PrayerTimes
