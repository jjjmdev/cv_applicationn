export default function Preview({ data }) {
  const { personalInfo, education, experience } = data

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
        {Object.entries(education).map(
          ([key, { schoolName, startDate, endDate, degree, location }]) => (
            <div className='preview-school' key={key}>
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
      <section className='preview-experience'>
        <h2>Experience</h2>
        {Object.entries(experience).map(
          ([
            key,
            {
              companyName,
              jobTitle,
              startDate,
              endDate,
              location,
              description,
            },
          ]) => (
            <div className='preview-experience' key={key}>
              <div>
                <h3>{companyName}</h3>
                <p>
                  {startDate} – {endDate}
                </p>
              </div>
              <p>{jobTitle}</p>
              <p>{location}</p>
              <p>{description}</p>
            </div>
          )
        )}
      </section>
    </div>
  )
}
