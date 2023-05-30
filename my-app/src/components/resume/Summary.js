import '../../App.css';
import React from 'react';
import {
    Box,
    Link,
    Typography
} from '@material-ui/core';

const summary = (
  <Box className="breakdown bottom-line">
    <Typography variant="body2">
    Solutions-focused and goal-oriented software engineer with 8+ years of experience in implementing advanced technology and business solutions in public and private industries. Demonstrates strong analytical and problem-solving skills and the ability to follow through with projects from inception to completion.
    </Typography>
  </Box>
)

const experienceList = [
  {
    'title': 'Senior Software Engineer (Backend)',
    'place': 'Vanderbilt Medical Center',
    'time': 'Jan 2021 - Current',
    'link': 'https://victr.vumc.org/'
  },
  {
    'title': 'Senior Software Engineer (Full-stack)',
    'place': 'Bellhop',
    'time': 'Sept 2018 – December 2020',
    'link': 'https://bellhop.com'
  },
  {
    'title': 'Senior Engineer (Full-stack)',
    'place': 'Narrative Content Group',
    'time': 'Jan 2016 – Sept 2018',
    'link': 'https://narrativecontentgroup.com/'
  },
  {
    'title': 'Senior Engineer (Front-end)',
    'place': 'NBA Digital (National Basketball Association)',
    'time': 'Jan 2015 – Jan 2016',
    'link': 'https://nba.com'
  },
  {
    'title': 'Lead Web Application Engineer (Full-stack)',
    'place': 'Rollins School of Public Health @ Emory',
    'time': 'Oct 2013 - Jan 2015'
  },
  {
    'title': 'Software Engineer (Full-stack)',
    'place': 'School of Medicine @ Emory - Bioinformatics Group',
    'time': 'July 2013 - Oct 2013'
  },
  {
    'title': 'Software Intern/Engineer (Full-stack)',
    'place': 'University of Georgia - USAID Research Group',
    'time': ' Oct 2011 - Jun 2013'
  },
  ];

const openSourceContribList = [
  {
    'title': 'Raw Data Respository - All of Us (NIH) program',
    'github': 'https://github.com/all-of-us/raw-data-repository',
  }
];

const publicationList = [
  {
    'title': 'Data Explorer: A Tool for Data Exploration and Cohort Discovery in Massive Multidimensional Datasets.',
    'description': 'Pathology Informatics Summit 2014, May 13-16, 2014. Pittsburgh, PA — Best Electronic Presentation Pathology Informatics.',
    'names': 'Kazerouni, A, Tharpe, D, Sharma, A'
  },
  {
    'title': 'Federated Access to Images, Annotations and Measurements to Optimize the Review and Auditing of Imaging Data.',
    'description': 'Submitted in Clinical Trials.',
    'names': 'Ashish Sharma, Atlanta, GA; N Saghar; D Tharpe; T Pan, MS; R W Filice, MD'
  }
];

const experience = (
  <Box className="breakdown bottom-line">
    <Typography variant="body1" className="green-title section-header">
    Experience
    </Typography>
    {experienceList.map(exp =>
        <Box className='experience'>
          <Typography variant="body2" className="green-title">
            {exp.title}
          </Typography>
          <Link underline="hover" href={exp.link} color="inherit">
          <Typography variant="body2">
            {exp.place}
          </Typography>
          </Link>
          <Typography variant="body2">
            {exp.time}
          </Typography>
        </Box>
    )}
  </Box>
)

const open_source_contrib = (
  <Box className="breakdown bottom-line">
    <Typography variant="body1" className="green-title section-header">
    Open-Source Contributions
    </Typography>
  {openSourceContribList.map(project => 
    <Box className='experience'>
      <Typography variant="body2" className="green-title">
        {project.title}
      </Typography>
      <Link underline="hover" href={project.github} color="inherit">
        <Typography variant="body2">
          {project.github}
        </Typography>
      </Link>
    </Box>
  )}
  </Box>
)

const publications = (
  <Box className="breakdown bottom-line">
    <Typography variant="body1" className="green-title section-header">
   Publications    </Typography>
  {publicationList.map(publication =>
    <Box className='experience'>
      <Typography variant="body2" className="green-title">
        {publication.title}
      </Typography>
      <Typography variant="body2">
        {publication.description}
      </Typography>
      <Typography variant="body2">
        {publication.names}
      </Typography>
    </Box>
  )}
  </Box>
)

const education = (
  <Box className="breakdown">
    <Typography variant="body1" className="green-title section-header">
    Education
    </Typography>
    <Typography variant="body2" className="green-title">
    Bachelor of Science
    </Typography>
    <Typography variant="body2">
    Middle Georgia State University
    </Typography>
  </Box>
)

function Summary() {
  return (
    <>
    <Box className='summary'>
    {summary}
    {experience}
    {open_source_contrib}
    {publications}
    {education}
    </Box>
    </>
  );
}

export default Summary;
