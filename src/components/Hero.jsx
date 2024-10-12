import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={'relative w-full h-screen mx-auto'}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className={'w-full'}>
          <div className={'flex items-start gap-6 relative top-6 xs:justify-between lg:w-full'}>
            <h1
              className={`${styles.heroHeadText} leading-[50px] xs:leading-[60px] md:leading-[74px] text-white z-10 flex-col lg:flex-row lg:gap-4 lg:whitespace-nowrap flex`}
            >
              Hi, I'm <span className='text-[#915EFF]'>Andrey</span>
            </h1>

            <div className={'rounded-full w-40 h-40 absolute right-2 z-2 sm:h-fit md:w-64 lg:w-[30%]'}>
              <img className={'object-cover rounded-full'} src='/me.jpg' alt="it's me" />
            </div>
          </div>
          <p className={`${styles.heroSubText} relative top-12 md:w-[70%] text-white-100 z-10`}>
            I am stuff engineer, I develop user <br className='sm:block hidden' />
            interfaces, web applications and much more
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-10 left-[50%] transform:translateX-[50%] flex justify-center items-center py-5'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
