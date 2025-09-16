import Navbar from './Navbar'
import PersonalInfoForm from './PersonalInfoForm'

export default function Editor({ data }) {
  return (
    <div className='cv-editor'>
      CV Editor
      <Navbar data={data} />
      <PersonalInfoForm />
    </div>
  )
}
