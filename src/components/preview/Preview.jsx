import './preview.css'
import { hideIfEmpty } from '../utils'

export default function Preview({ data }) {
  const { personalInfo, skills, education, experience, projects } = data

  return (
    <div className='preview'>
      <div className='a4-preview-page__container'>
        <div className='a4-preview-page'>
          <section className='preview-personal-info'>
            <h1>
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <p>
              {/* Doing too much but: only show '|' if two fields are filled */}
              {personalInfo.email}

              {personalInfo.email !== '' &&
                (personalInfo.phoneNumber !== '' ||
                  personalInfo.location !== '') &&
                ' | '}

              {personalInfo.phoneNumber}

              {personalInfo.phoneNumber !== '' &&
                personalInfo.location !== '' &&
                ' | '}

              {personalInfo.location}
            </p>
          </section>

          <section className={hideIfEmpty(skills) + 'preview-skills'}>
            <h2>{'Technical Skills'.toUpperCase()}</h2>
            <hr />
            <p>{skills}</p>
          </section>

          <section className={hideIfEmpty(education) + 'preview-education'}>
            <h2>{'Education'.toUpperCase()}</h2>
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

          <section className={hideIfEmpty(experience) + 'preview-experience'}>
            <h2>{'Experience'.toUpperCase()}</h2>
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

          <section className={hideIfEmpty(projects) + 'preview-projects'}>
            <h2>{'Projects'.toUpperCase()}</h2>
            <hr />

            {Object.entries(projects).map(
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
    </div>
  )
}
