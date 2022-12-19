import { useState } from "react";

export default function NumberOfPeopleDropdown() {
  const [raiders, setRaiders] = useState('');

  const changeRaiderNumbers = (raidNubmer) => {
    setRaiders(raidNubmer)
  }
  
  return (
    <div className="inline-flex justify-center rounded-md border ml-2 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
      <select 
        id="numberOfPeople"
        onChange={(event) => {changeRaiderNumbers(event.target.value)}}
        value={raiders}
      >
        <option selected>How Many People</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
      {console.log(raiders)}
    </div>
  )
}
