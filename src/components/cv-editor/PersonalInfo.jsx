import Section from './Section'
import { kebabToCamel } from '../utils'

export default function PersonalInfoForm({ data, setData }) {
  const handleChange = (e) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [kebabToCamel(e.target.name)]: e.target.value,
      },
    })
  }

  return (
    <Section title='Personal Information'>
      <div className='full-name'>
        <div>
          <label htmlFor='first-name'>First Name</label>
          <input
            type='text'
            name='first-name'
            id='first-name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            name='last-name'
            id='last-name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='phone-number'>Phone Number</label>
          <input
            type='tel'
            name='phone-number'
            id='phone-number'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            name='location'
            id='location'
            onChange={handleChange}
          />
        </div>
      </div>
    </Section>
  )
}
