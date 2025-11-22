import React from 'react';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center md:gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <div className=' flex flex-col items-center justify-content -4 text-white text-medium mx-5'>
            <div className='md:w-20 w-12 '>
              <img src={technology.icon} className='w-full h-full' />
            </div>

            <p className=' md:text-base text-xs text-center'>{technology.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
