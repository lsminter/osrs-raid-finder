

export default function RaidExperience(updater, raidExperience, changeRaidExperience) {

  return (
    <div className="inline-flex justify-center rounded-md border ml-2 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
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
    </div>
  )
}
