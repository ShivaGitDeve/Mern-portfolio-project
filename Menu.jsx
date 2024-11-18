import React from 'react'
import "./menu.css"
import { Link } from 'react-scroll';
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcBusinessContact } from 'react-icons/fc'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const Menu = ({ toggle }) => {
    return (
        <>
            {toggle && (
                <>
                    <Zoom>
                        <div className="navbar-profile-pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aWJ2GAlu8ipTWvTyf-i9qcPi9T-HYLQx7Q&s" alt="profile pic" />
                        </div>
                    </Zoom>
                    <Fade left>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nva-link">
                                    <Link to='Home'>
                                        <FcHome title='Home' />Home
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nva-link">
                                    <Link to='About'>
                                        <FcAbout title='About' />About
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nva-link">
                                    <Link to='Education'>
                                        <FcReadingEbook title='Education' />Education
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nva-link">
                                    <Link to='Technology'>
                                        <FcBiotech title='Tech Stack' />Technology
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nva-link">
                                    <Link to='Project'>
                                        <FcVideoProjector title='Projects' />Project
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nva-link">
                                    <Link to='Experince'>
                                        <FcPortraitMode title='Work Experince' />Experince
                                    </Link>
                                </div>
                            </div>

                            <div className="nav-item">
                                <div className="nva-link">
                                    <Link to='Contact'>
                                        <FcBusinessContact title='Contact' />Contact
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </Fade>
                </>
            )}

        </>

    )
}


export default Menu;