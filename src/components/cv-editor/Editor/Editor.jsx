import './editor.css'
import { useState } from 'react'
import { Download } from 'lucide-react'
import html2pdf from 'html2pdf.js'
import Navbar from '../Navbar/Navbar'
import PersonalInfoForm from '../forms/PersonalInfoForm'
import SkillsForm from '../forms/SkillsForm'
import FormsList from '../FormsList'

const defaultActiveSection = 'personalInfo'

export default function Editor({ data, setData }) {
  const [activeSection, setActiveSection] = useState(defaultActiveSection)

  const handleDownloadClick = () => {
    const element = document.querySelector('.a4-preview-page')
    const clonedElement = element.cloneNode(true)

    clonedElement.style.zoom = '1'
    html2pdf(clonedElement, {
      margin: 0,
      jsPDF: {
        format: 'letter',
      },
    })
  }

  return (
    <div className='cv-editor'>
      <Navbar
        data={data}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <div className='edit-form'>
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

        <div className='download' onClick={handleDownloadClick}>
          <Download />
          <span>Download PDF</span>
        </div>
      </div>
    </div>
  )
}
