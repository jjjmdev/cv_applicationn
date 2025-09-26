import { useState } from 'react'
import Navbar from './Navbar'
import PersonalInfoForm from './forms/PersonalInfoForm'
import SkillsForm from './forms/SkillsForm'
import FormsList from './FormsList'

const defaultActiveSection = 'personalInfo'

export default function Editor({ data, setData }) {
  const [activeSection, setActiveSection] = useState(defaultActiveSection)

  return (
    <div className='cv-editor'>
      CV Editor
      <Navbar data={data} setActiveSection={setActiveSection} />
      {(activeSection === 'personalInfo' && (
        <PersonalInfoForm data={data} setData={setData} />
      )) ||
        (activeSection === 'skills' && (
          <SkillsForm data={data} setData={setData} />
        )) || (
          // for Projects, Education and Experience
          <FormsList
            section={activeSection}
            key={activeSection}
            data={data}
            setData={setData}
          />
        )}
    </div>
  )
}
