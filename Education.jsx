import React from 'react'
import './education.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";

const Education = () => {
    return (
        <>
            <div className="education" id='Education'>
                <h2 className="col-12 mt-3 mb-1 text-center">
                    Education
                </h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2017-2018"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<IoMdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">High School</h3>
                        <h4 className="vertical-timeline-element-subtitle">MKD Children Academy , IN</h4>
                        <p>
                            {/* 2017-2018
                            <br /> */}
                            CBSE -Percentage - 73%
                        </p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date='2019-2020'
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<IoMdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Intermediate Secondary School</h3>
                        <h4 className="vertical-timeline-element-subtitle">Shikhar Sisu Sadan, IN</h4>
                        <p>
                            {/* 2019-2020
                            <br /> */}
                            CBSE -Percentage - 76%
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"  
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2021-present"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<IoMdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Btech (CSE)</h3>
                        <h4 className="vertical-timeline-element-subtitle">MDU Rhotak, IN</h4>
                        <p>
                            {/* 2021 - present
                            <br /> */}
                            CGPA - 8
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Education
