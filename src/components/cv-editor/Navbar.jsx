export default function Navbar({ data }) {
  const sections = Object.keys(data)

  return (
    <nav>
      <ul>
        {sections.map((element, index) => (
          <li key={index}>
            <button>{element}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
