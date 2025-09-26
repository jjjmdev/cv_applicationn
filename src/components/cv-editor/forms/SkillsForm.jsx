export default function Skills({ data, setData }) {
  const handleChange = (value) => {
    setData({ ...data, skills: value })
  }

  return (
    <div>
      <label htmlFor='skills'>Skills</label>
      <textarea
        name='skills'
        id='skills'
        value={data.skills}
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
    </div>
  )
}
