
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id:0,
        title: "Digital Clock",
        desc: "A digital clock designed with HTML, CSS, and TypeScript to display the current time dynamically.",
        img: "/project_01.png",
        tags: ["HTML", "Node", "CSS", "Typescript"]
    },

    {
      id:1,
      title: "Html-Css-profile",
      desc: "A responsive profile page built with HTML and CSS, showcasing user information and styling elements.",
      img: "/project_02.png",
      tags: ["HTML", "Node", "CSS"]
  },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>

      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid- cols-3 place-items-center'>
        {data.map ((el)=>(<Card 
        key={el.id}
        tittle={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>

    </div>
  )
}

export default Projects