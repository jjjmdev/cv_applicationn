export default function Navbar({ data }) {
  return (
    <nav>
      <ul>
        {data.map((element) => (
          <li key={element.id}>
            <button>{element.title}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
