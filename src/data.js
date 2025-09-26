import { v4 as uuidv4 } from 'uuid'

export const emptyData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
  },
  education: {
    schoolName: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  },
  experience: {
    companyName: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  },
  projects: {
    projectName: '',
    description: '',
  },
}

export const data = {
  personalInfo: emptyData.personalInfo,
  skills: '',
  projects: {},
  education: {},
  experience: {},
}

export const prefillData = {
  personalInfo: {
    firstName: 'John Lloyd',
    lastName: 'Dela Cruz',
    email: 'johnlloydcruz@gmail.com',
    phoneNumber: '0999-123-4567',
    location: 'Quezon City, Metro Manila',
  },

  education: {
    [uuidv4()]: {
      schoolName: 'International State College of the Philippines',
      degree: 'BS in Reverse Psychology',
      startDate: 'Sep 2030',
      endDate: 'July 2035',
      location: 'Samar, Leyte',
    },
  },

  experience: {
    [uuidv4()]: {
      companyName: 'Company Name',
      jobTitle: 'Manager',
      startDate: 'Sep 2011',
      endDate: 'July 20016',
      location: 'Country, City',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos, ullam repellat magnam cupiditate.',
    },

    [uuidv4()]: {
      companyName: 'Company Name Two',
      jobTitle: 'Administrator',
      startDate: 'Sep 2016',
      endDate: 'July 2024',
      location: 'Country, City',
      description:
        'Consequuntur, perspiciatis beatae provident blanditiis officiis iste recusandae nam itaque exercitationem laborum asperiores porro ipsums.',
    },
  },

  projects: {
    [uuidv4()]: {
      projectName: 'Project One',
      description:
        'ipsum dolor sit amet consectetur autem. ipsum dolor sit amet consectetur adipisicing elit. Doloribus quia sit iusto veritatis saepe esse enim maiores autem.',
    },

    [uuidv4()]: {
      projectName: 'Project Two',
      description:
        'Consequuntur, perspiciatis beatae provident blanditiis officiis iste recusandae nam itaque exercitationem laborum asperiores porro ipsum. Dolores illum ab blanditiis libero.',
    },
  },

  skills: 'JavaScript, HTML, CSS, Webpack, React, Node.js',
}
