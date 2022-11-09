import '../../App.css';
import React from 'react';
import {
    Box,
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
    'time': 'Jan 2021 - Current'
  },
  {
    'title': 'Senior Software Engineer (Full-stack)',
    'place': 'Bellhop',
    'time': 'Sept 2018 – December 2020'
  },
  {
    'title': 'Senior Engineer (Full-stack)',
    'place': 'Narrative Content Group',
    'time': 'Jan 2016 – Sept 2018'
  },
  {
    'title': 'Senior Engineer (Front-end)',
    'place': 'NBA Digital (National Basketball Association)',
    'time': 'Jan 2015 – Jan 2016'
  },
  {
    'title': 'Lead Web Application Engineer (Full-stack)',
    'place': 'Rollins School of Public Health @ Emory',
    'time': 'Oct 2013 - Jan 2015'
  },
  {
    'title': 'Software Engineer (Full-stack)',
    'place': 'School of Medicine @ Emory',
    'time': 'July 2013 - Oct 2013'
  },
  {
    'title': 'Software Intern/Engineer (Full-stack)',
    'place': 'University of Georgia',
    'time': ' Oct 2011 - Jun 2013'
  },
  ];

const experience = (
  <Box className="breakdown bottom-line">
    {experienceList.map(exp =>
        <Box className='experience'>
          <Typography variant="body2" className="green-title">
            {exp.title}
          </Typography>
          <Typography variant="body2">
            {exp.place}
          </Typography>
          <Typography variant="body2">
            {exp.time}
          </Typography>
        </Box>
    )}
  </Box>
)

const education = (
  <Box className="breakdown">
    <Typography variant="body2" className="green-title">
    Bachelor of Science in Information Technology
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
    {education}
    </Box>
    </>
  );
}

export default Summary;