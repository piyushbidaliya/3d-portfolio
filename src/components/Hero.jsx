import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import computerMo from '../assets/computermobile.png'
const Hero = () => {
  const [openMobile, setOpenMobile] = useState(false)

    useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setOpenMobile(mediaQuery.matches);

    const handleMediaChange = (e) => setOpenMobile(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
            <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Piyush</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications
          </p>
        </div>
      </div>
      {
        openMobile ? ( 
          <div className='relative top-[40%]'>
            <img src={computerMo} alt="" />
          </div>
        ) : (<ComputersCanvas/>)
      }
      
      <div className='absolute xs:bottom-4 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero