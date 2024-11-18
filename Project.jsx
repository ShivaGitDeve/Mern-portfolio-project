import React from 'react'
import './project.css'

const Project = () => {
    return (
        <>
            <div className="container project" id='Project'>
                <h2 className='col-12 mt-3 mb-1 text-center'>TOP RECENT PROJECTS</h2>
                <hr />
                <p className='pb-3 text-center'>👉🏻 Here are my top 3 recent project with live links and source code</p>
                <div className="row" id="ads">
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">
                                    Full Stack
                                </span>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafUqJfEjPbE-LuJsyHAD1WGOaM_agDbvy7A&s" alt="" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Mongodb</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge">Node</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">
                                        Business Website
                                    </h5>
                                </div>
                                <a href="#" className="ad-btn">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">
                                    Weather App
                                </span>
                                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240125180753/Screenshot-2024-01-25-125829.jpg" alt="" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge">Bootstrap</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">
                                        Weather Forecasting
                                    </h5>
                                </div>
                                <a href="#" className="ad-btn">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">
                                    Full Stack
                                </span>
                                <img src="https://mir-s3-cdn-cf.behance.net/projects/404/7f42cc196421081.Y3JvcCwyNDI0LDE4OTYsMCww.jpg" alt="" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Mongodb</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge">Node</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">
                                        Personal Portfolio Website
                                    </h5>
                                </div>
                                <a href="#" className="ad-btn">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project

