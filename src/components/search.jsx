import React, { useState} from 'react'

export default function Search() {
  
  // sample dataset
  const cities = [
    {name: 'Calgary', province: 'Alberta'},
    {name: 'Airdie', province: 'Alberta'},
    {name: 'Toronto', province: 'Ontario'},
    {name: 'Vancouver', province: 'British Columbia'},
    {name: 'Whistler', province: 'British Columbia'},
    {name: 'Moncton', province: 'New Brunswick'},
  ];

  const [searchCity, setSearchCity] = useState('');
  
  // handler function to read search bar changes
  const handleChange = (e) => {
    e.preventDefault();
    setSearchCity(e.target.value);
  };

  // return matched city from search bar
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
          <th>City</th>
          <th>Province</th>
        </tr>

        {cities.map((city, i) => (
          <div>
            <tr>
              <td>{city.i}</td>
              <td>{city.name}</td>
              <td>{city.province}</td>
            </tr>
          </div>
        ))};

      </table>
    </div>
  )
}
