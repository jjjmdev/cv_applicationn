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
  education: {},
  experience: {},
  projects: {},
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
      schoolName:
        'International State College of the Philippines, Encantadia Extension',
      degree: 'BS in Reverse Psychology',
      startDate: 'Sep 2015',
      endDate: 'July 2020',
      location: 'Encantadia, Cavite',
    },
  },

  experience: {
    [uuidv4()]: {
      companyName: 'Goologolo',
      jobTitle: 'Janitor',
      startDate: 'Sept 2020',
      endDate: 'July 2022',
      location: 'San Fernando, La Union',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos, ullam repellat magnam cupiditate.',
    },

    [uuidv4()]: {
      companyName: 'Betflix',
      jobTitle: 'President',
      startDate: 'Dec 2022',
      endDate: 'Nov 2024',
      location: 'Makati, Metro Manila',
      description:
        'Consequuntur, perspiciatis beatae provident blanditiis officiis iste recusandae nam itaque exercitationem laborum asperiores porro ipsums.',
    },
  },

  projects: {
    [uuidv4()]: {
      projectName: 'Calorie Tracker',
      description:
        'Reprehenderit dolor veniam irure Lorem aute deserunt amet id anim. Deserunt dolore culpa non deserunt non Lorem eu consectetur est.',
    },

    [uuidv4()]: {
      projectName: 'To-Do List',
      description:
        'Fugiat incididunt nostrud laborum cillum Lorem sit culpa proident officia ex qui. Labore cillum eiusmod laborum aliqua mollit ad reprehenderit magna.',
    },
  },

  skills: 'JavaScript, HTML, CSS, Webpack, React, Node.js',
}
