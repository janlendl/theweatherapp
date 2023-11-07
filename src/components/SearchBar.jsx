import React, { useState} from 'react'

export default function SearchBar() {
  
  const [searchCity, setSearchCity] = useState('');
  
  const handleChange = (e) => {
    setSearchCity(e.target.value);
  }
  return (
    <div>

      <input
        type='text'
        placeholder='Enter City'
        onChange={handleChange}
        value={searchCity}
      />
      {/* <div>
        <h3>City is: {searchCity}</h3>
      </div> */}
    </div>
  )
}
