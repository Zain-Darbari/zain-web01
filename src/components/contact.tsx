import React from 'react'
import { GrMail } from "react-icons/gr";
import { MdPermPhoneMsg } from "react-icons/md";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="fade-right">Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="fade-right">
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="fade-right">
                <GrMail size={30}/>abc@gmail.com
                </div>

                <div className='flex gap-3 items-center' data-aos="fade-right">
                <MdPermPhoneMsg  size={30}/> (+92) 000-000
                </div>
            </div>

            <div className='space-y-8'data-aos="fade-left">
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-[#0349fc] ' id='name' />
            </div>

            <div className='flex flex-col gap-1'data-aos="fade-left">
                <label htmlFor="emai">Email</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-[#0349fc] ' id='email' />
            </div>

            <div className='flex flex-col gap-1'data-aos="fade-left">
                <label htmlFor="message">Message</label>
                <textarea
                className='bg-transparent border border-[#0349fc] ' id='message' rows={8} >
                </textarea>
            </div>
            <button className='bg-[#0349fc] p-2 px-6'data-aos="fade-left">Send</button>
            </div>
        </div>

    </div>
  )
}

export default Contact