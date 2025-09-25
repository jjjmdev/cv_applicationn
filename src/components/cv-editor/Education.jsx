import { v4 as uuidv4 } from 'uuid'
import Section from './Section'
import { kebabToCamel } from '../utils'
import { emptyData } from '../../data'

export default function Education({ data, setData }) {
  const createEducationEntry = () => {
    setData({
      ...data,
      education: {
        ...data.education,
        [uuidv4()]: emptyData.education,
      },
    })
  }

  const handleEntryChange = (id, e) => {
    const { name, value } = e.target

    setData({
      ...data,
      education: {
        ...data.education,
        [id]: {
          ...data.education[id],
          [kebabToCamel(name)]: value,
        },
      },
    })
  }

  const deleteEducationEntry = (id) => {
    const dataCopy = data

    delete dataCopy.education[id]

    setData({ ...dataCopy })
  }

  return (
    <>
      <Section title='Education'>
        {Object.keys(data.education).map((id) => {
          const formData = data.education[id]
          return (
            <EducationForm
              key={id}
              formId={id}
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

function EducationForm({ formId, formData, handleChange, handleDelete }) {
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
            onChange={(e) => handleChange(formId, e)}
          />
        </div>
        <div>
          <label htmlFor='degree'>Degree</label>
          <input
            type='text'
            name='degree'
            id='degree'
            value={formData.degree}
            onChange={(e) => handleChange(formId, e)}
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
              onChange={(e) => handleChange(formId, e)}
            />
          </div>
          <div>
            <label htmlFor='end-date'>End Date</label>
            <input
              type='text'
              name='end-date'
              id='end-date'
              value={formData.endDate}
              onChange={(e) => handleChange(formId, e)}
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
            onChange={(e) => handleChange(formId, e)}
          />
        </div>

        <button onClick={() => handleDelete(formId)}>Delete</button>
      </div>
    </>
  )
}
