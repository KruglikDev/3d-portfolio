import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, icons, image, source_code_link }) => {
  return (
    <motion.div
      onClick={() => window.open(source_code_link, '_blank')}
      onKeyDown={() => window.open(source_code_link, '_blank')}
      className={'cursor-pointer'}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0 }}
      variants={fadeIn('up', 'spring', 0, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt='project_image' className='w-full h-full object-contain rounded-2xl' />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex items-center flex-wrap gap-2'>
          {icons?.map((icon, i) => (
            <img className={'w-5 h-5'} alt={'icon'} src={icon} key={i + index} />
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }} variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is
          briefly described with links to websites. It reflects my ability to solve complex problems, work with
          different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
