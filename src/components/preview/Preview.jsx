export default function Preview({ data }) {
  const { personalInfo, education } = data

  return (
    <div className='preview'>
      Preview
      <section className='preview-personal-info'>
        <h1>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p>
          {data.personalInfo.email} {data.personalInfo.phoneNumber}{' '}
          {data.personalInfo.location}
        </p>
      </section>
      <section className='preview-education'>
        <h2>Education</h2>
        {education.map(
          ({ schoolName, startDate, endDate, degree, location, id }) => (
            <div className='preview-school' key={id}>
              <div>
                <h3>{schoolName}</h3>
                <p>
                  {startDate} – {endDate}
                </p>
              </div>
              <p>{degree}</p>
              <p>{location}</p>
            </div>
          )
        )}
      </section>
    </div>
  )
}
