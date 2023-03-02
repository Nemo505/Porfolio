import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import {motion} from 'framer-motion'
import bubble from '../assets/bubble.png'

const Projects = ({}) => {

    const aboveMediumScreens = useMediaQuery("(min-width: 1060px)");

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
            <div className='basic-2/5 z-10 '>
                <img src={bubble} 
                    className='max-w-[300px] md:max-w-[300px] mx-auto mt-32 md:mt-0 animate-bounce delay-700 duration-10' 
                    style={{opacity: '0.2'}} alt='' />
            </div>
            <div className='md:order-2 z-30 basis-3/5 md:m-12 md:mt-16'>
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
                            <div className="row-span-3 row-start-1 col-span-2 "> 
                                <div className="max-w-sm p-6 border border-l-4 border-l-violet-600 border-gray-600 rounded-tr-3xl bg-zinc-900 bg-opacity-70 rounded-bl-3xl shadow hover:animate-pulse">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Admin Dashboard</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                    Sidebar, Widgets, Charts (Rechart), Data table, Single Page, Dark Mode with React
                                    </p>
                                    <a href="https://github.com/Nemo505/admin_react.git" className="inline-flex items-center text-fuchsia-700 hover:underline">
                                        More Details in GitHub
                                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="row-start-2 row-span-3  col-span-2">
                                <div className="max-w-sm p-6 border border-l-4 border-l-violet-600 border-gray-600 rounded-tr-3xl bg-zinc-900 bg-opacity-70 rounded-bl-3xl shadow hover:animate-pulse">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Social Media Page</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Writing with react for the products that have chart for sale as well</p>
                                    <a href="https://github.com/Nemo505/React_Social.git" className="inline-flex items-center text-fuchsia-700 hover:underline">
                                        More Details in GitHub
                                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="row-span-3  col-span-2">
                                <div className="max-w-sm p-6 border border-l-4 border-l-violet-600 border-gray-600 rounded-tr-3xl bg-zinc-900 bg-opacity-70 rounded-bl-3xl shadow hover:animate-pulse">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Single Page</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"></p>
                                    <a href="https://github.com/Nemo505/Laravel-React.git" className="inline-flex items-center text-fuchsia-700 hover:underline">
                                        More Details in GitHub
                                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="row-span-3  col-span-2">
                                <div className="max-w-sm p-6 border border-l-4 border-l-violet-600 border-gray-600 rounded-tr-3xl bg-zinc-900 bg-opacity-70 rounded-bl-3xl shadow hover:animate-pulse">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Electronic Devices</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                        
                                    </p>
                                    <a href="#" className="inline-flex items-center text-fuchsia-700 hover:underline">
                                        More Details in GitHub
                                        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ):(
                        <div>
                            <div className="max-w-sm mt-8 p-6 border border-l-4 border-l-violet-600 border-gray-600 rounded-tr-3xl bg-zinc-900 bg-opacity-70 rounded-bl-3xl shadow">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Admin DashBoard</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                Sidebar, Widgets, Charts (Rechart), Data table, Single Page, Dark Mode with React
                                </p>
                                <a href="https://github.com/Nemo505/admin_react.git" className="inline-flex items-center text-blue-600 hover:underline">
                                    More Details
                                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                </a>
                            </div>

                            <div className="max-w-sm mt-8 p-6 border border-l-4 border-l-violet-600 border-gray-600 rounded-tr-3xl bg-zinc-900 bg-opacity-70 rounded-bl-3xl shadow">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Social Media Page</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                    
                                </p>
                                <a href="https://github.com/Nemo505/React_Social.git" className="inline-flex items-center text-blue-600 hover:underline">
                                    More Details
                                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                </a>
                            </div>

                            <div className="max-w-sm mt-8 p-6 border border-l-4 border-l-violet-600 border-gray-600 rounded-tr-3xl bg-zinc-900 bg-opacity-70 rounded-bl-3xl shadow">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Single Page</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Laravel + React</p>
                                <a href="https://github.com/Nemo505/Laravel-React.git" className="inline-flex items-center text-blue-600 hover:underline">
                                    More Details
                                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                </a>
                            </div>

                            <div className="max-w-sm mt-8 p-6 border border-l-4 border-l-violet-600 border-gray-600 rounded-tr-3xl bg-zinc-900 bg-opacity-70 rounded-bl-3xl shadow">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Electronic Devices Shop</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                                <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                                    More Details
                                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                </a>
                            </div>

                        </div>
                        
                    )}
                    
                </motion.div>
            </div>  
        </div>    
    </section>
  )
}

export default Projects