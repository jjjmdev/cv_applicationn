import Section from '../Section'

export default function ExperienceForm({
  formId,
  formData,
  handleChange,
  handleDelete,
  saveForm,
}) {
  const { companyName, jobTitle, startDate, endDate, location, description } =
    formData

  return (
    <Section title='Experience'>
      <div className='experience-form'>
        <div>
          <label htmlFor='company-name'>Company</label>
          <input
            type='text'
            name='company-name'
            id='company-name'
            value={companyName}
            onChange={(e) => handleChange(formId, e)}
          />
        </div>
        <div>
          <label htmlFor='degree'>Job Title</label>
          <input
            type='text'
            name='job-title'
            id='job-title'
            value={jobTitle}
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
        <div>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
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
