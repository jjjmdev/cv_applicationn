import Section from '../Section'

export default function ProjectsForm({
  formId,
  formData,
  handleChange,
  handleDelete,
  saveForm,
}) {
  const { projectName, description } = formData
  return (
    <Section title='Projects'>
      <div className='projects-form'>
        <div>
          <label htmlFor='project-name'>
            Project Name<span>*</span>
          </label>
          <input
            type='text'
            id='project-name'
            name='project-name'
            value={projectName}
            onChange={(e) => handleChange(formId, e)}
            required
          />
        </div>

        <div>
          <label htmlFor='project-description'>Description</label>
          <textarea
            name='description'
            id='project-description'
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
