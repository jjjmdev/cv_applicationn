import Section from '../Section'
import { kebabToCamel } from '../../utils'

export default function PersonalInfoForm({ data, setData }) {
  const { personalInfo } = data

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
            value={personalInfo.firstName}
          />
        </div>
        <div>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            name='last-name'
            id='last-name'
            onChange={handleChange}
            value={personalInfo.lastName}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={handleChange}
            value={personalInfo.email}
          />
        </div>
        <div>
          <label htmlFor='phone-number'>Phone Number</label>
          <input
            type='tel'
            name='phone-number'
            id='phone-number'
            onChange={handleChange}
            value={personalInfo.phoneNumber}
          />
        </div>
        <div>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            name='location'
            id='location'
            onChange={handleChange}
            value={personalInfo.location}
          />
        </div>
      </div>
    </Section>
  )
}
