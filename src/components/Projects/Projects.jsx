import './Projects.css';
import React from 'react';
import MYTOURNI from '../../assets/mytourni_thumbnail.jpg'
import FLOWW from '../../assets/flow_thumbnail.jpg'
import CLOUDTECH from '../../assets/cloudtech-thumbnail.jpg'
import SPICE from '../../assets/spice_thumbnail.jpg'
import DATE from '../../assets/date_thumbnail.jpg'

const projectItems = [
  {
    id: 2,
    image: FLOWW,
    title: 'Floww',
    github: 'https://github.com/Zabzx/Floww',
    link: 'https://flowwd.netlify.app/'
  },
  {
    id: 5,
    image: SPICE,
    title: 'SpiceUp!',
    github: 'https://github.com/Zabzx/spiceUp',
    link: 'https://spiceup-v2.herokuapp.com/'
  },
  {
    id: 3,
    image: CLOUDTECH,
    title: 'CloudTech',
    github: 'https://github.com/Zabzx/Static',
    link: 'https://cloudtechh.netlify.app/'
  },
  {
    id: 1,
    image: MYTOURNI,
    title: 'MyTourni',
    github: 'https://github.com/Zabzx/tourni',
    link: 'http://mytourni.com/'
  },
  {
    id: 4,
    image: DATE,
    title: 'Live Date Countdown',
    github: 'https://github.com/Zabzx/Live-Countdown',
    link: 'https://livedatecountdown.netlify.app/'
  },
];

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="align-center">My Projects</h2>
        <div className="container portfolio__container">
        {
          projectItems.map(({id, image, title, github, link}) => {
            return (
              <article key={id} className="project-item">
              <div className="project-item-image">
              <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className="btn-pf" target="_blank">GitHub</a>
              <a href={link} className="btn-pf2" target="_blank">Link to App</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects