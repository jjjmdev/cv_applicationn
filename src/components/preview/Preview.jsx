import '../styles/preview.css'

export default function Preview({ data }) {
  const { personalInfo, education, experience } = data

  return (
    <div className='preview'>
      <div className='a4-preview-page'>
        <section className='preview-personal-info'>
          <h1>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <p>
            {data.personalInfo.email} | {data.personalInfo.phoneNumber} |{' '}
            {data.personalInfo.location}
          </p>
        </section>
        <section className='preview-education'>
          <h2>Education</h2>
          <hr />
          {Object.entries(education).map(
            ([key, { schoolName, startDate, endDate, degree, location }]) => (
              <div className='preview-school' key={key}>
                <div>
                  <h3>{schoolName}</h3>
                  <p>
                    {startDate} – {endDate}
                  </p>
                </div>
                <p>
                  <i>{degree}</i>
                </p>
                <p>{location}</p>
              </div>
            )
          )}
        </section>
        <section className='preview-experience'>
          <h2>Experience</h2>
          <hr />
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
              <div className='preview-job' key={key}>
                <div>
                  <h3>{companyName}</h3>
                  <p>
                    {startDate} – {endDate}
                  </p>
                </div>
                <p>
                  <i>{jobTitle}</i>
                </p>
                <p>{location}</p>
                <p>{description}</p>
              </div>
            )
          )}
        </section>
        <section className='preview-projects'>
          <h2>Projects</h2>
          <hr />

          {Object.entries(data.projects).map(
            ([key, { projectName, description }]) => (
              <div key={key}>
                <h3>{projectName}</h3>
                <p>{description}</p>
              </div>
            )
          )}
        </section>
      </div>
    </div>
  )
}
