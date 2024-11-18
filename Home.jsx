import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
// import Resume from '../assets/docs/resume.pdf'
import Resume from '../assets/docs/resume1.pdf'

export const Home = () => {
    return (
        <>
            <div className="container-fluid home-container" id='Home'>
                <div className="container home-content">
                    <h2>Hii   I'm a </h2>
                    <h1>
                        <Typewriter
                            options={{
                                strings: ["FullStack Developer !", "UI/UX Designer !"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <div className="home-buttons">
                        <button className='btn btn-hire'>Hire Me</button>
                        <a className='btn btn-cv' href={Resume} download="your_name.pdf" >My Resume</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
