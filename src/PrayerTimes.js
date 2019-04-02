import React from 'react'

const PrayerTimes = (props) => {
  return (
    <div>
    
        <p>Fajr Prayer:   {props.prayers.fajr}   </p>
        <p>Dhuhr Prayer:  {props.prayers.dhuhr}  </p>
        <p>Asr Prayer:    {props.prayers.asr}    </p>
        <p>Maghrib Prayer:{props.prayers.maghrib}</p>
        <p>Isha Prayer:   {props.prayers.isha}   </p>
        <p>Sunrise Time (Shurooq):  {props.prayers.shurooq}</p>
       
    </div>
  )
}

export default PrayerTimes
