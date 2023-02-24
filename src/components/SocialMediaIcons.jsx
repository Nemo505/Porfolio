import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start
        gap-7'>
        <a href="" 
            target="_blank"
            rel="moreferrer"
            className='hover:opacity-50 transition duration-500'>
            <LinkedInIcon />
        </a>
        <a href="" 
            target="_blank"
            rel="moreferrer"
            className='hover:opacity-50 transition duration-500'>
            <EmailIcon />
        </a>
        <a href="" 
            target="_blank"
            rel="moreferrer"
            className='hover:opacity-50 transition duration-500'>
            <GitHubIcon />
        </a>
        <a href="" 
            target="_blank"
            rel="moreferrer"
            className='hover:opacity-50 transition duration-500'>
            <InstagramIcon />
        </a>
    </div>
  )
}

export default SocialMediaIcons