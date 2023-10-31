import React, { useState} from 'react'

export default function Search() {

  const [searchCity, setSearchCity] = useState('');

  const cities = [
    {name: 'Calgary', province: 'Alberta'},
    {name: 'Airdie', province: 'Alberta'},
    {name: 'Toronto', province: 'Ontario'},
    {name: 'Vancouver', province: 'British Columbia'},
    {name: 'Whistler', province: 'British Columbia'},
    {name: 'Moncton', province: 'New Brunswick'},
  ]
  return (
    <label>
      <input name='citySearch' defaultValue='Enter City'/>
    </label>
  )
}
