export default function Navbar({ data, setActiveSection }) {
  const sections = Object.keys(data)

  return (
    <nav>
      <ul>
        {sections.map((element, index) => (
          <li key={index} onClick={() => setActiveSection(element)}>
            <button>{element}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
