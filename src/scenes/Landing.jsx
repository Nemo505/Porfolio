import React from 'react'
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({setSelectedPage}) => {
    const aboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>

        <div className='md:order-2 flex justify-center basic-3/5 z-10 mt-16 md:mt-32'>
            {aboveMediumScreens ? (
                // <div className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                // before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                // before:border-2 before:border-red-500 before:z-[-1]'>
                // </div>
                <div className='relative z-0 
                '>
                    <img src="../../src/assets/maki.png" 
                        className='hover:filter py-16 ml-28 hover:saturate-200 transition duration-500 z-10 w-3/5 absolute
                        max-w-[400px] md:max-w-[600px]' alt="profile" />
                    <img src="../../src/assets/butterfly.png" 
                        className='hover:filter hover:saturate-200 transition duration-500 z-0 w-full
                        max-w-[400px] md:max-w-[600px]' alt="profile" />
                </div>
                ): (
                    <img src="../../src/assets/maki.png" 
                    className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                    max-w-[400px] md:max-w-[600px]' alt="profile" />
                )
            }
        </div>
        <div className='z-30 basis-2/5 mt-12 md:mt-32'>
            <motion.div initial="hidden" whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}
                }}
            >
                <p className='text-5xl font-playfait z-1 
                    text-center md:text-start
                '>
                    Shwe {""}
                    <span className='xs:relative xs:text-fuchsia-300 xs:font-semibold z-20'>
                        Chyu
                    </span> {""}
                    <span className='xs:relative xs:text-blue-300 xs:font-semibold z-20'>
                        Naing
                    </span> 
                </p>
                <p className='mt-10 mb-7 text-sm text-center md:text-start leading-loose'>
                    I am Web Developer based in Myanmar. Designing websites are what I've been doing already for two years in work and in my free time from seniors and self-taught lessons.I custom-coded a variety of websites, ranging from simple e-shops to complex platforms with a variety of functions.
                </p>

            </motion.div>
            {/* {Call to Action} */}

            <motion.div
                className='flex mt-5 justify-center md:justify-start'
                initial="hidden" whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}
                }}
            >
                <AnchorLink className='bg-gradient-sunset text-dark-blue rounded-sm py-2 px-7 font-semibold
                    hover:bg-yellow-200 hover:text-orange-700 transition duration-500'
                    onClick={() => setSelectedPage("contact")}
                    href="#contact"
                >
                    Contact Me
                </AnchorLink>
                <AnchorLink className='rounded-r-sm bg-gradient-sunset py-0.5 pr-0.5'
                    onClick={() => setSelectedPage("contact")}
                    href="#contact">
                        <div className='bg-dark-blue hover:text-fuchsia-400 px-7 font-semibold transition duration-500
                            w-full h-full flex items-center justify-center font-playfait'>
                            Let's talk
                        </div>
                </AnchorLink>
            </motion.div>

            <motion.div
                className='flex mt-5 justify-center md:justify-start'
                initial="hidden" whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.4, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}
                }}
            >
                <SocialMediaIcons />
            </motion.div>

        </div>
        
        </section>
    )
}

export default Landing