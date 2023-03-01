import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from "framer-motion";
import "./mySkill.css"

const MySkills = () => {
    const aboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id='skills' className='pb-24'>
        <div className='flex justify-center'>
            <motion.div className='md:w-2/3 mt-32'
                initial="hidden" whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 1}}
                variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: { opacity: 1, y: 0}
                }}>
                <p className='font-playfait text-center font-semibold text-4xl mb-5'>
                    My Skills
                </p>
                <LineGradient width='w-1/3 mx-auto'/>
                <p className='mt-10 mb-7 text-center leading-loose'>
                    Develop PHP projects in Laravel Framework using Ajax, Jquery, JavaScripts with APIs for mobile with JWT authentication.
                    Use MySQL Database with xampp and Laragon Environment for dynamic data-driven.
                    Woking React projects with Material UI, Bootstrap, Tailwind CSS, React-Router.

                </p>
            </motion.div>
        </div>
        <div>
            {aboveMediumScreens ? (
                    <div className='absoute flex items-center justify-center pt-20'>
                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#EBB2D6" />
                                    <stop offset="100%" stopColor="#141852" />
                                    </linearGradient>
                                </defs>
                                <circle className='php' cx="150" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="50%" y="50%" textAnchor="middle" stroke="#fff" strokeWidth="1px">80%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>JAVASCRIPT, HTML, CSS</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" className='react' cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="50%" y="50%" textAnchor="middle" stroke="#fff" strokeWidth="1px">70%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'> Front-End(React)</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle className='api' cx="150" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="50%" y="50%" textAnchor="middle" stroke="#fff" strokeWidth="1px">85%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>PHP (LARAVEL)</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle className='mySql' cx="150" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="50%" y="50%" textAnchor="middle" stroke="#fff" strokeWidth="1px">60%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>MySQL, MangoDB </div>
                        </div>

                    </div>
                ): (
                    <div className='absoute items-center pt-16'>
                        <div className='relative items-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#EBB2D6" />
                                    <stop offset="100%" stopColor="#141852" />
                                    </linearGradient>
                                </defs>
                                <circle cx="160" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="53%" y="50%" textAnchor="middle" stroke="#fff" strokeWidth="1px">80%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>JAVASCRIPT, HTML, CSS</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="160" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="53%" y="50%" textAnchor="middle" stroke="#fff" strokeWidth="1px">70%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>Front-End(React)</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="160" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="53%" y="50%" textAnchor="middle" stroke="#fff" strokeWidth="1px">85%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>PHP (LARAVEL)</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="160" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="53%" y="50%" textAnchor="middle" stroke="#fff" strokeWidth="1px">60%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>MySQL, MangoDB</div>
                        </div>

                    </div>
                )
            }
        </div>
    </section>
  )
}

export default MySkills