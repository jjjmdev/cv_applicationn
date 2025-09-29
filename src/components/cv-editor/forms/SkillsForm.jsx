import Section from '../Section'
export default function Skills({ data, setData }) {
  const handleChange = (value) => {
    setData({ ...data, skills: value })
  }

  return (
    <Section title='Skills'>
      <label htmlFor='skills'>Skills</label>
      <textarea
        name='skills'
        id='skills'
        value={data.skills}
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
    </Section>
  )
}
