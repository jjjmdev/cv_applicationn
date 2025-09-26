import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { emptyData } from '../../data'
import { kebabToCamel } from '../utils'

import EducationForm from './forms/EducationForm'
import ExperienceForm from './forms/ExperienceForm'
import ProjectsForm from './forms/ProjectsForm'

export default function FormsList({ section, data, setData }) {
  const [selectedFormId, setSelectedFormId] = useState(null)

  const createFormEntry = () => {
    const newId = uuidv4()

    setData({
      ...data,
      [section]: {
        ...data[section],
        [newId]: emptyData[section],
      },
    })

    setSelectedFormId(newId)
  }

  const handleEntryChange = (id, e) => {
    const { name, value } = e.target

    setData({
      ...data,
      [section]: {
        ...data[section],
        [id]: {
          ...data[section][id],
          [kebabToCamel(name)]: value,
        },
      },
    })
  }

  const deleteFormEntry = (id) => {
    const dataCopy = data
    delete dataCopy[section][id]

    setData({ ...dataCopy })
    setSelectedFormId(null)
  }

  const saveFormEntry = () => {
    setSelectedFormId(null)
  }

  const startEditFormEntry = (id) => {
    setSelectedFormId(id)
  }

  // If no item is selected
  if (selectedFormId === null) {
    return (
      <>
        {Object.entries(data[section]).map(([formId, formData]) => (
          <Form
            key={formId}
            formId={formId}
            formData={formData}
            section={section}
            startEditForm={startEditFormEntry}
          />
        ))}

        <button onClick={createFormEntry}>Add</button>
      </>
    )
  }

  // For when there is item selected
  switch (section) {
    case 'education':
      return (
        <EducationForm
          formId={selectedFormId}
          formData={data[section][selectedFormId] || null}
          handleChange={handleEntryChange}
          handleDelete={deleteFormEntry}
          saveForm={saveFormEntry}
        />
      )
    case 'experience':
      return (
        <ExperienceForm
          formId={selectedFormId}
          formData={data[section][selectedFormId]}
          handleChange={handleEntryChange}
          handleDelete={deleteFormEntry}
          saveForm={saveFormEntry}
        />
      )
    case 'projects':
      return (
        <ProjectsForm
          formId={selectedFormId}
          formData={data[section][selectedFormId]}
          handleChange={handleEntryChange}
          handleDelete={deleteFormEntry}
          saveForm={saveFormEntry}
        />
      )
  }
}

const Form = ({ formId, formData, section, startEditForm }) => {
  const titles = {
    education: 'schoolName',
    experience: 'companyName',
    projects: 'projectName',
  }

  if (titles[section]) {
    return (
      <button onClick={() => startEditForm(formId)}>
        {formData[titles[section]] || ''}
      </button>
    )
  }
}
