import { useState } from 'react'
import Navbar from './Navbar'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'

const defaultActiveSection = 'personalInfo'

export default function Editor({ data, setData }) {
  const [activeSection, setActiveSection] = useState(defaultActiveSection)

  const renderSection = () => {
    switch (activeSection) {
      case 'personalInfo':
        return <PersonalInfo data={data} setData={setData} />
      case 'skills':
        return <Skills data={data} setData={setData} />
      case 'projects':
        return <Projects data={data} setData={setData} />
      case 'education':
        return <Education data={data} setData={setData} />
      case 'experience':
        return <Experience data={data} setData={setData} />
    }
  }

  return (
    <div className='cv-editor'>
      CV Editor
      <Navbar data={data} setActiveSection={setActiveSection} />
      {renderSection()}
    </div>
  )
}
