import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start
        gap-7'>
        <a href="https://www.linkedin.com/in/kazue-hayami-27919a267/" 
            target="_blank"
            rel="moreferrer"
            className='hover:opacity-50 transition duration-500'>
            <LinkedInIcon />
        </a>
        <a href="shwechyunaing@gmail.com" 
            target="_blank"
            rel="moreferrer"
            className='hover:opacity-50 transition duration-500'>
            <EmailIcon />
        </a>
        <a href="https://github.com/Nemo505" 
            target="_blank"
            rel="moreferrer"
            className='hover:opacity-50 transition duration-500'>
            <GitHubIcon />
        </a>
        <a href="https://www.instagram.com/kazue_hayami?r=nametag" 
            target="_blank"
            rel="moreferrer"
            className='hover:opacity-50 transition duration-500'>
            <InstagramIcon />
        </a>
    </div>
  )
}

export default SocialMediaIcons