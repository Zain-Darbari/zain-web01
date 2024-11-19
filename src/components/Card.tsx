import React from 'react'
import Image from 'next/image';

interface propsType {
  tittle: string;
  desc:string;
  img:string;
  tags:string[];
}

const Card:React.FC<propsType> = ({tittle,desc,img,tags}) => {
  return (
    <div className='border border-[#0349fc] w-[300px] sm:w-[350px]'>
      <div>
        <Image className=' w-[300px] sm:w-[350px] h-auto'data-aos="fade-right"
        src={img}
        width={350}
        height={350}
        alt={tittle}
        />
      </div>

      <div>
        <div className='p-4 space-y-4'data-aos="fade-left">
          <div className=' text-4xl font-extralight'>{tittle}</div>
          <div>{desc}</div>
          {tags.map((el)=>(
            <div className='tags' key={el}>
              {el}
            </div>
            ))}
        </div>
      </div>
        
    </div>
  )
}

export default Card