import React, { useRef, useState } from 'react';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../Style';

import { fadeIn, slideIn } from '../utils/motion';
import { useForm, ValidationError } from '@formspree/react';
import { check } from '../assets';

const Contact = () => {
  const [state, handleSubmit] = useForm('mankbkje');
  if (state.succeeded) {
    return (
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse justify-center gap-10 overflow-hidden`}
      >
        <motion.div
          variants={fadeIn()}
          className='flex flex-col max-w-[750px] items-center justify-center w-[90%] xl:w-[50%] mx-auto bg-black-100 bg-opacity-80 p-8 rounded-2xl'
        >
          <p className='text-xl font-bold text-center'>
            Thanks for contacting me i'll reach out to you soon
          </p>

          <img src={check} className='max-w-[300px] ' />
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] max-w-[750px] w-[90%] xl:w-[50%] mx-auto bg-black-100 bg-opacity-80 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          // ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              id='name'
              name='name'
              // value={form.name}
              // onChange={handleChange}
              placeholder='Enter Name?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              id='email'
              type='email'
              name='email'
              // value={form.email}
              // onChange={handleChange}
              placeholder='Enter Email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <ValidationError prefix='Email' field='email' errors={state.errors} />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              id='message'
              name='message'
              // value={form.message}
              // onChange={handleChange}
              placeholder='Write a Message?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />

            <ValidationError prefix='Message' field='message' errors={state.errors} />
          </label>

          <button
            type='submit'
            disabled={state.submitting}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 justify-center br xl:h-auto rounded-3xl md:h-[670px] h -[350px]'
      >
        <div className=' flex flex-col items-center py-10 '>
          <h1 className='text-3xl font-bold text-center'>Schedule A Call</h1>

          <h3 className='text-medium text-center  py-5'>
            Book a time that works for you—let’s talk about your project.
          </h3>

          <div className='lg:h-[500px] lg:w-[450px] h-[400px] w-[90%]  '>
            <iframe
              src='https://calendly.com/mjjames006/new-meeting-1'
              className='lg:h-[900px]'
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '12px',
              }}
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
