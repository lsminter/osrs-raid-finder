import { useState } from "react"

export default function RaidDropdown() {
  const [raid, setRaid] = useState('');

  const changeRaid = (newRaid) => {
    setRaid(newRaid)
  }

  return (
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
      {console.log(raid)}
    </div>
  )
}
