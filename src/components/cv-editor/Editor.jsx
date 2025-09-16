import Navbar from './Navbar'
import { navbarSections } from '../../data'

export default function Editor() {
  return (
    <div className='cv-editor'>
      CV Editor
      <Navbar sections={navbarSections} />
    </div>
  )
}
