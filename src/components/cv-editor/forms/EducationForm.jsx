import Section from '../Section'

export default function EducationForm({
  formId,
  formData,
  handleChange,
  handleDelete,
  saveForm,
}) {
  const { schoolName, degree, startDate, endDate, location } = formData

  return (
    <Section title='Education'>
      <div className='education-form'>
        <div>
          <label htmlFor='school-name'>School</label>
          <input
            type='text'
            name='school-name'
            id='school-name'
            value={schoolName}
            onChange={(e) => handleChange(formId, e)}
          />
        </div>
        <div>
          <label htmlFor='degree'>Degree</label>
          <input
            type='text'
            name='degree'
            id='degree'
            value={degree}
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
              value={startDate}
              onChange={(e) => handleChange(formId, e)}
            />
          </div>
          <div>
            <label htmlFor='end-date'>End Date</label>
            <input
              type='text'
              name='end-date'
              id='end-date'
              value={endDate}
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
            value={location}
            onChange={(e) => handleChange(formId, e)}
          />
        </div>

        <div className='buttons-container'>
          <button
            className='delete-button'
            onClick={() => handleDelete(formId)}
          >
            Delete
          </button>
          <button className='save-button' onClick={() => saveForm(formId)}>
            Save
          </button>
        </div>
      </div>
    </Section>
  )
}
