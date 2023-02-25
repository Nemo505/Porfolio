import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from "framer-motion";
import "./mySkill.css"

const MySkills = () => {
    const aboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section id='skills' className='pb-24'>
        <div className='flex justify-center mt-16'>
            <motion.div className='md:w-1/3'
                initial="hidden" whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}
                }}>
                <p className='font-playfait font-semibold text-4xl mb-5'>
                    My Skills
                </p>
                <LineGradient width='w-1/3'/>
                <p className='mt-10 mb-7'>
                    Lorem ipsum dolor sit amet consectetur feeadf dfcrha my me is not efe feifehef how areistsge ayfeg gslfb elhgs
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
                                    <stop offset="0%" stop-color="#EBB2D6" />
                                    <stop offset="100%" stop-color="#141852" />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="50%" y="50%" text-anchor="middle" stroke="#fff" stroke-width="1px">70%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>PHP</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="50%" y="50%" text-anchor="middle" stroke="#fff" stroke-width="1px">70%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>REACT</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="50%" y="50%" text-anchor="middle" stroke="#fff" stroke-width="1px">80%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>JAVA</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="150" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="50%" y="50%" text-anchor="middle" stroke="#fff" stroke-width="1px">60%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>PYTHON</div>
                        </div>

                    </div>
                ): (
                    <div className='absoute items-center pt-20'>
                        <div className='relative items-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#EBB2D6" />
                                    <stop offset="100%" stop-color="#141852" />
                                    </linearGradient>
                                </defs>
                                <circle cx="180" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="60%" y="50%" text-anchor="middle" stroke="#fff" stroke-width="1px">70%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>PHP</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="180" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="60%" y="50%" text-anchor="middle" stroke="#fff" stroke-width="1px">70%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>REACT</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="180" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="60%" y="50%" text-anchor="middle" stroke="#fff" stroke-width="1px">80%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>JAVA</div>
                        </div>

                        <div className='relative items-center justify-center'>
                            <svg>
                                <defs>
                                    <linearGradient id="GradientColor">
                                    <stop offset="0%" stop-color="#e91e63" />
                                    <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="180" cy="70" r="60" strokeWidth={7} 
                                    stopOpacity="transparent" strokeDasharray={0} 
                                    ></circle>
                                <text x="60%" y="50%" text-anchor="middle" stroke="#fff" stroke-width="1px">60%</text>
                            </svg>
                            <div className='font-playfait font-semibold text-center'>PYTHON</div>
                        </div>

                    </div>
                )
            }
        </div>
    </section>
  )
}

export default MySkills