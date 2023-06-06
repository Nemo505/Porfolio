import React, { useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import {motion, AnimatePresence} from 'framer-motion'
import Cube from '../../cubes/Cube'
import { projects } from "../../projectData";
import ProjectInfo from './ProjectInfo';
import CancelIcon from '@mui/icons-material/Cancel';

const Projects = ({}) => {

const aboveMediumScreens = useMediaQuery("(min-width: 1060px)");
const [selectedId, setSelectedId] = useState(null)

  return (
    <section id='projects'> 
        <motion.div initial="hidden" whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, y: -50},
                visible: { opacity: 1, y: 0}
            }}
        >    
            <p className='text-5xl font-playfait 
                text-center mt-10'>
                Projects
            </p>
        </motion.div>

        <div className='md:flex gap-16 md:items-center'>
            <div className='basic-2/5 '>
               <Cube />
            </div>

            {/* Projects */}
            <div className='md:order-2 basis-3/5 md:m-12 md:mt-16'>
                <motion.div initial="hidden" whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.4, duration: 0.7}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: { opacity: 1, x: 0}
                    }}
                >    
                    {aboveMediumScreens ? (
                        <div className="grid grid-cols-4 grid-row-5 gap-4">
                            {projects.map((project) => (
                                <div className="row-span-3 col-span-2">
                                {project.status == "active" ? (
                                    <div  key={project.id}> 
                                        <motion.div layoutId={project.id} onClick={() => setSelectedId(project.id)}>

                                            <div className="max-w-sm p-6 border border-l-4
                                                border-l-violet-600 border-gray-600 
                                                rounded-tr-3xl bg-zinc-900 bg-opacity-70 
                                                rounded-bl-3xl shadow hover:animate-pulse"
                                            >
                                            <ProjectInfo project={project}/>

                                            </div>
                                        </motion.div> 
                                    </div>
                                ): (
                                <div></div>
                                )}
                               </div>
                            ))}             
                        </div>
                    ):(
                        <div className="grid grid-cols-5 gap-3 grid-row-5 justify-center">

                            {projects.map((project) => (
                                <motion.div layoutId={project.id} onClick={() => setSelectedId(project.id)}>
                                    <div className="max-w-sm mt-8 p-6 border border-l-4 
                                        border-l-violet-600 border-gray-600 
                                        rounded-tr-3xl bg-zinc-900 bg-opacity-70
                                        rounded-bl-3xl shadow" key={project.id}>
                                        <ProjectInfo project={project}/>
                                    </div>
                                </motion.div>
                            ))}
                           
                        </div>
                    )}
                    
                </motion.div>
            </div> {/*EndProjects  */}

        </div>  

        {/* Customized Model box  */}
        <AnimatePresence> 
        {selectedId && (
            <motion.div layoutId={selectedId}>
                {projects.map((project) => (
                   <div key={project.id}>
                     {selectedId == project.id ? 
                        (
                            <div >
                                 <div className="fixed top-0 left-0 w-[100%] h-[100%]" 
                                    style={{background: "rgba(0, 0, 0, 0.6)"}}>
                                    <div className=" fixed z-40  
                                     -translate-x-[50%] -translate-y-[50%] g" 
                                     style={{background: "linear-gradient(to right, #151515, #480755, #766DC1)", 
                                     top:"15%", left:"20%", width:"60%",height:"auto", borderRadius:"20px", padding:"10px"}}>
                                        <button type='button' style={{float: "right"}} onClick={() => setSelectedId(null)}>
                                            <CancelIcon/>
                                        </button>
                                        <div>
                                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                                            <img src={project.img}
                                                style={{opacity: '0.8', maxHeight:"70%", maxWidth:"70%", margin:"auto", objectFit:"cover"}} alt='' />
                                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                                {project.desc}
                                            </p>
                                            <a href={project.href} className="inline-flex items-center text-fuchsia-700 hover:underline">
                                                More Details in GitHub
                                                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        ):(
                            <div></div>
                        )}
                   </div>     
                    
                ))}         
               
            </motion.div>
        )}
        </AnimatePresence>  
        {/* End */}
    </section>
  )
}

export default Projects