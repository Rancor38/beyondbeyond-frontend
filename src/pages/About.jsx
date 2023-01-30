import React from 'react';
import github from '../static-images/github.png'

const About = () => {
    return (
       <div className='about-container'>
        <h1 className='about-title'>Welcome to Monsters,</h1>
        <main className='about-container'>
        <p>This application is fairly straightforward. Save the link and you can use it to browse all of the monsters in Dungeons & Dragons that are available within the System Reference Document. I'll be adding other feature to it soon to make it easier to browse the app.</p>
        
        </main>
        <h4 className='about-center'><a className='about-read-more'
            href={"https://github.com/Rancor38/beyondbeyond-frontend"}
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Project on GitHub <img className='about-github'
        src={github} alt="github"/>
          </a></h4>
        </div>
    );
};

export default About;