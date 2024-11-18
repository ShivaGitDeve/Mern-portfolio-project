import React from 'react'
import './work.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiReact } from 'react-icons/si'

const Work = () => {
    return (
        <>
            <div className=" work" id='Experince'>
                <div className=" container work-exp">
                    <h2 className='col-12 mt-3 mb-1 text-center'>
                        Training Experience
                    </h2>
                    <hr />
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="4 Months"
                            iconStyle={{ background: '#138781', color: '#fff' }}
                            icon={< SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">Maruti Suzuki Pvt Ltd , Gurgaon IN</h3>
                            <h4 className="vertical-timeline-element-subtitle">Backend Developer</h4>
                            <p>
                                Working as a backend developer at Maruti Suzuki would involve responsibilities such as developing and
                                maintaining backend systems, databases, and APIs to support the company’s software applications and
                                services. This role would likely entail working with technologies such as Java, Python, SQL databases, and
                                possibly cloud platforms like AWS or Azure. It’s also essential to collaborate with frontend developers, testers,
                                and other team members to ensure seamless integration and functionality of the overall software system.
                            </p>

                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    )
}

export default Work
