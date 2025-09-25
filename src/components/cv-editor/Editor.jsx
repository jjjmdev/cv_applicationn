import { useState } from 'react'
import Navbar from './Navbar'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'

import FormsList from './FormsList'

const defaultActiveSection = 'personalInfo'

export default function Editor({ data, setData }) {
  const [activeSection, setActiveSection] = useState(defaultActiveSection)

  return (
    <div className='cv-editor'>
      CV Editor
      <Navbar data={data} setActiveSection={setActiveSection} />
      <FormsList section={activeSection} data={data} setData={setData} />
    </div>
  )
}
