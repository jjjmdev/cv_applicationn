import Navbar from './Navbar'
import PersonalInfo from './PersonalInfo'

export default function Editor({ data, setData }) {
  return (
    <div className='cv-editor'>
      CV Editor
      <Navbar data={data} />
      <PersonalInfo data={data} setData={setData} />
    </div>
  )
}
