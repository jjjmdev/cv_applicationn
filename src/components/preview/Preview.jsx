export default function Preview({ data }) {
  const { personalInfo } = data

  return (
    <div className='preview'>
      Preview
      <section className='personal-info-preview'>
        <h1>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p>
          {data.personalInfo.email} {data.personalInfo.phoneNumber}{' '}
          {data.personalInfo.location}
        </p>
      </section>
    </div>
  )
}
