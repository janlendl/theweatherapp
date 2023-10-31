import React, { useState} from 'react'

export default function Search() {
  
  const cities = [
    {name: 'Calgary', province: 'Alberta'},
    {name: 'Airdie', province: 'Alberta'},
    {name: 'Toronto', province: 'Ontario'},
    {name: 'Vancouver', province: 'British Columbia'},
    {name: 'Whistler', province: 'British Columbia'},
    {name: 'Moncton', province: 'New Brunswick'},
  ];

  const [searchCity, setSearchCity] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchCity(e.target.value);
  };

  if (searchCity.length > 0) {
    cities.filter((city) => {
      return city.name.match(searchCity);
    });
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Enter City'
        onChange={handleChange}
        value={searchCity}/>
      
      <table>
        <tr>

        </tr>
      </table>
    </div>
  )
}
