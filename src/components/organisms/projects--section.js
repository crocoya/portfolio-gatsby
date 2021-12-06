import React from 'react';
import { ProjectsItems } from '../molecules/projectsItems';

const ProjectsSection = () => {
  return (
    <section className='projects container' id='projects'>
      <h2 className='projects--heading'>Projects</h2>
      <ul className='projects--grid'>
        {ProjectsItems.map((item, i) => (
          <li className='item' key={i}>
            <div className='project--inner'>
              <header>
                <div className='project--top'>
                  <div className='folder'>{item.folder}</div>

                  <div className='project--links'>
                    {item.github && (
                      <a
                        href={item.github.link}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {item.github.icon}
                      </a>
                    )}
                    {item.site && (
                      <a href={item.site.link} target='_blank' rel='noreferrer'>
                        {item.site.icon}
                      </a>
                    )}
                  </div>
                </div>
                <h3 className='project--title'>
                  {item.link && (
                    <a href={item.link} target='_blank' rel='noreferrer'>
                      {item.title}
                    </a>
                  )}
                </h3>
                <div className='project--description'>
                  <p>{item.description}</p>
                </div>
              </header>
              <footer>
                <ul className='project--tech--list'>
                  <li>{item.techList.techOne}</li>
                  <li>{item.techList.techTwo}</li>
                  <li>{item.techList.techThree}</li>
                </ul>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
