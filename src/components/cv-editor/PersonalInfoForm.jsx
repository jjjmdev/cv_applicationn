import Section from './Section'

export default function PersonalInfoForm() {
  return (
    <Section title='Personal Information'>
      <div className='full-name'>
        <div>
          <label htmlFor='first-name'>First Name</label>
          <input type='text' name='first-name' id='first-name' />
        </div>
        <div>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' name='last-name' id='last-name' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='phone-number'>Phone Number</label>
          <input type='tel' name='phone-number' id='phone-number' />
        </div>
        <div>
          <label htmlFor='location'>Location</label>
          <input type='text' name='location' id='location' />
        </div>
      </div>
    </Section>
  )
}
