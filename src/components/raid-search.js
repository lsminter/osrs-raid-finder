// import RaidDropdown from "./raid-dropdown-button";
// import NumberOfPeopleDropdown from "./number-of-people-for-raid";
// import RaidExperience from "./raid-experience";
import { useState } from "react";
import Cookies from 'universal-cookie';


function RaidSearcher() {
  const [user, setUser] = useState('');
  const [raid, setRaid] = useState('');
  const [raiders, setRaiders] = useState('');
  // const [raidExperience, setRaidExperience] = useState('');

  // const changeRaidExperience = (newExperience) => {
  //   setRaidExperience(newExperience)
  // }

  const changeRaiderNumbers = (raidNumber) => {
    setRaiders(raidNumber)
  }

  const handleChange = event => {
    setUser(event.target.value);
  };

  const changeRaid = (newRaid) => {
    setRaid(newRaid)
  }

  const cookies = new Cookies();

  const handleSubmit = event => {
    event.preventDefault();

    cookies.set('User', user)
    cookies.set('Raid', raid)
    cookies.set('Number of People', raiders)

    console.log('form submitted ✅');
    console.log(cookies.get('User'))
    console.log(cookies.get('Raid'))
    console.log(cookies.get('Number of People'))
  };

  return (
    <div className="mx-2">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
            className="inline-flex justify-center rounded-md border ml-2 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
            type="text" 
            name="name"  
            id="user"
            onChange={handleChange}
            value={user}
            autoFocus
          />

        </label>      
        <div className="inline-flex justify-center rounded-md border ml-2 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <select 
            id="raid"
            onChange={(event) => changeRaid(event.target.value)}
            value={raid}
            >
            <option selected>Select a Raid</option>
            <option value="COX">Chambers of Xeric</option>
            <option value="TOB">Theater of Blood</option>
            <option value="TOA">Tombs of Amascut</option>
          </select>
        </div>
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
        </div>
        {/* <div className="inline-flex justify-center rounded-md border ml-2 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <select 
            id="numberOfPeople"
            onChange={(event) => {changeRaidExperience(event.target.value)}}
            value={raidExperience}
          >
            <option selected>Raid Experience</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
          {console.log(raidExperience)}
        </div> */}
        <input 
          className="inline-flex justify-center rounded-md border ml-2 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
          type="Submit" 
          value="Search" 
          />
    </form>
    </div>
  )
}

export default RaidSearcher;