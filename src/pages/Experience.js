import "./Experience.css";

const allExperience = [
  {
    jobs: [
      {
        period: 'Apr 2022 – Current',
        role: 'Product Developer',
        company: 'AND Digital',
        location: 'Glasgow',
      },
    ],
    responsibilities: [
      'Conducted technical and culture interviews.',
      'Provided mentoring to junior developers.',
      'Contributed to internal blogs and developer community and created coding challenges.',
      'Took on additional role as People Champion, representing my team and ensuring their voices are heard.',
      'Worked on two clients at this consultancy, as described below.',
    ],
    children: [
      {
        jobs: [
          {
            period: 'Aug 2023 – Current',
            role: 'Technical Lead',
            company: 'The Cabinet Office',
            location: 'Glasgow',
          },
        ],
        responsibilities: [
          'Led team of cross-platform developers (React, Next.js, Java/Spring) to fulfil deliverables set out in contract.',
          'Instituted coding standards and branch protections.',
          'Built and maintained Cypress E2E testing framework from scratch, reducing frequency of P1 bugs by over 90%.\nCreated CI pipeline in GitHub Actions with scheduled, automatic, and manual triggers to slot into team’s existing workflow.\nChampioned use of E2E throughout the teams and iterated development on new features.',
          'Migrated sign in system to GOV.UK One Login SSO provider.',
        ],
        children: null,
      },
      {
        jobs: [
          {
            period: 'May 2022 – Aug 2023',
            role: 'Senior Software Developer',
            company: 'Sky',
            location: 'Livingston',
          },
        ],
        responsibilities: [
          'Workshopped, owned and delivered several large features for Sky’s internal customer service software.',
          'Built reusable React components for component library that are used across the software department.',
          'Contributed to frontend community forum and improved release process.',
        ],
        children: null,
      },
    ],
  },{
    jobs: [
      {
        period: 'Jan 2021 – Apr 2022',
        role: 'Technical Lead',
        company: 'Alfi NI Ltd.',
        location: 'Belfast',
      },
      {
        period: 'Jan 2019 – Jan 2021',
        role: 'Software Developer',
        company: 'Alfi NI Ltd.',
        location: 'Belfast',
      },
    ],
    responsibilities: [
      'Led team of cross-platform developers (React, React Native, Python) in a fast-paced startup.',
      'Promoted due to outstanding performance on Alfi mobile application.',
      'Conducted interviews and designed technical tests.',
      'Provided mentoring to junior developers.',
      'Implemented coding standards: ESLint, mandatory code reviews via Pull Requests, and git branching strategies.',
      'Planned and managed development and deployment of React Native Alfi application,\nbuilt for multiple Android device types, which was rolled out to thousands of taxis across the UK and US.',
      'Designed specification for React Native Kotlin modules to reduce bottlenecks in JS bridge.',
      'Developed Single-Page Application, creating a CMS for managing adverts, devices, theming, layouts and APKs.',
      'Managed Jenkins and AWS CodePipeline jobs as part CI/CD pipeline.',
      'Developed backend service to manage APKs in S3. Configured AWS Sam to manage scaling via CloudFormation.',
      'Managed 3D printing station and timetable to ensure delivery of components for tablet car mounts.',
    ],
    children: null,
  },
];

const Experience = () =>
  <div className="experience-container">
    {allExperience.map(experience => <ExperienceSection experience={experience}/> )}
  </div>

const ExperienceSection = ({ experience }) => {
  return (
    <div className="experience-section">
      <div className="job-title-section-container">
        {experience.jobs.map((job) =>
          <JobTitleSection job={job} key={`job-${job.period}-${job.company}`}/>
        )}
      </div>
      <ul>
        {experience.responsibilities.map(responsibility =>
          <li key={responsibility} className="no-bullets responsibility">
            {responsibility}
          </li>
        )}
      </ul>
      {experience.children ?
        <div className="sub-section">
          {experience.children.map(child =>
            <ExperienceSection experience={child} />
          )}
        </div>
      : null}
    </div>
  )
}

const JobTitleSection = ({ job }) =>
  <div className="job-title-section">
    {job.period}
    <div>
      <strong>{job.role}</strong> / {job.company}, {job.location}
    </div>
  </div>

export default Experience;