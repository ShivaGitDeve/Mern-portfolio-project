import React from 'react'
import './about.css'
export const About = () => {
  return (
    <>
    <div className="about" id='About'>
        <div className="row">
            <div className="col-md-6 about-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aWJ2GAlu8ipTWvTyf-i9qcPi9T-HYLQx7Q&s" alt="profile-pic" />
            </div>
            <div className="col-md-6 about-content">
              <h1>About me</h1>
              <p>
              I am eager to contribute as a full-stack developer at your company. With my
proficiency in front-end technologies like HTML, CSS, and
React.js, alongside my experience in back-end development using JavaScript
and Node.js, I am well-equipped to handle both aspects
of the development process. I am committed to continuous self-improvement
and dedicated to delivering even greater value to the
company as I grow in this role."
              </p>
            </div>
        </div>
    </div>
    </>
  )
}
