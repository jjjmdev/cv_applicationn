import { v4 as uuidv4 } from 'uuid'
import Section from './Section'
import { kebabToCamel } from '../utils'

export default function Education({ data, setData }) {
  const { education } = data

  const createEducationEntry = () => {
    setData({
      ...data,
      education: [
        ...data.education,
        {
          id: uuidv4(),
          schoolName: '',
          degree: '',
          startDate: '',
          endDate: '',
          location: '',
        },
      ],
    })
  }

  const handleEntryChange = (id, e) => {
    const { name, value } = e.target
    const newData = data
    const selectedEntry = newData.education.find((entry) => entry.id === id)

    selectedEntry[kebabToCamel(name)] = value

    setData({ ...newData })
  }

  const deleteEducationEntry = (id) => {
    const newEducation = data.education.filter((entry) => entry.id !== id)

    setData({ ...data, education: newEducation })
  }

  return (
    <>
      <Section title='Education'>
        {education.map(({ id }) => {
          const formData = education.find((form) => form.id === id)
          return (
            <EducationForm
              key={id}
              formData={formData}
              handleChange={handleEntryChange}
              handleDelete={deleteEducationEntry}
            />
          )
        })}
        <button className='education-add-button' onClick={createEducationEntry}>
          Add Education
        </button>
      </Section>
    </>
  )
}

function EducationForm({ formData, handleChange, handleDelete }) {
  return (
    <>
      <div className='education-form'>
        <div>
          <label htmlFor='school-name'>School</label>
          <input
            type='text'
            name='school-name'
            id='school-name'
            value={formData.schoolName}
            onChange={(e) => handleChange(formData.id, e)}
          />
        </div>
        <div>
          <label htmlFor='degree'>Degree</label>
          <input
            type='text'
            name='degree'
            id='degree'
            value={formData.degree}
            onChange={(e) => handleChange(formData.id, e)}
          />
        </div>
        <div className='school-dates'>
          <div>
            <label htmlFor='start-date'>Start Date</label>
            <input
              type='text'
              name='start-date'
              id='start-date'
              value={formData.startDate}
              onChange={(e) => handleChange(formData.id, e)}
            />
          </div>
          <div>
            <label htmlFor='end-date'>End Date</label>
            <input
              type='text'
              name='end-date'
              id='end-date'
              value={formData.endDate}
              onChange={(e) => handleChange(formData.id, e)}
            />
          </div>
        </div>
        <div>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            name='location'
            id='location'
            value={formData.location}
            onChange={(e) => handleChange(formData.id, e)}
          />
        </div>

        <button onClick={() => handleDelete(formData.id)}>Delete</button>
      </div>
    </>
  )
}
