import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { emptyData } from '../../data'
import { kebabToCamel } from '../utils'

import EducationForm from './forms/EducationForm'

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

  if (selectedFormId !== null) {
    return (
      <>
        {section === 'education' && (
          <EducationForm
            formId={selectedFormId}
            formData={data[section][selectedFormId]}
            handleChange={handleEntryChange}
            handleDelete={deleteFormEntry}
            saveForm={saveFormEntry}
          />
        )}
      </>
    )
  }

  return (
    <>
      {Object.entries(data[section]).map(([formId, formData]) => (
        <Form
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

const Form = ({ formId, formData, section, startEditForm }) => {
  if (section === 'education') {
    return (
      <button onClick={() => startEditForm(formId)}>
        {formData.schoolName}
      </button>
    )
  }
}
