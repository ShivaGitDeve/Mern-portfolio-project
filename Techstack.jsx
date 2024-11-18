import React from 'react'
import { TechstackList } from '../utils/TechstackList'
import './tecstack.css'

export const Techstack = () => {
    return (
        <>
            <div className="container tech" id='Technology'>
                <h2 className='col-12 mt-3 mb-1 text-center'>Technologies Stack</h2>
                <hr />
                <p className='pb-3 text-center'>👉🏻 including programing Languages, framework, databases, front-end and back-end tools, and APIs </p>
                <div className="row">
                    {TechstackList.map((tech) => (
                        <div key={tech._id} className="col-md-3">
                            <div className="card m-2">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex justify-content-center">
                                            <div className="alig-self-center">
                                            <tech.icon className="tech-icone" />
                                            </div>
                                            <div className="media-body">
                                                <h5>{tech.name}</h5>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Techstack
