import React from 'react'

const ProjectInfo = ({project}) => {
  return (
    <div>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {project.desc}
        </p>
        <a href={project.href} className="inline-flex items-center text-fuchsia-700 hover:underline">
            More Details in GitHub
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
        </a>
    </div>
  )
}

export default ProjectInfo