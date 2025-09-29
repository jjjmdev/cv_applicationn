import './navbar.css'
import { UserPen, CodeXml, Bot, GraduationCap, Bug } from 'lucide-react'

export default function Navbar({ data, setActiveSection, activeSection }) {
  const sections = Object.keys(data)
  const icons = {
    personalInfo: <UserPen />,
    skills: <CodeXml />,
    projects: <Bot />,
    education: <GraduationCap />,
    experience: <Bug />,
  }

  return (
    <nav>
      <ul>
        {sections.map((element, index) => (
          <li key={index} onClick={() => setActiveSection(element)}>
            <button
              className={
                element === activeSection ? 'nav-active-button' : undefined
              }
            >
              {icons[element]}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
