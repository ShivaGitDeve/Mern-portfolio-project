import React from 'react'
import Home from '../pages/Home'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineDoubleRigth } from 'react-icons/ai'
import "./layout.css";
import { useState } from 'react';
import Menu from './Menu/Menu';

export const Layout = () => {
    const [toggle, setToggele] = useState(true);

    const handleToggle = () => {
        setToggele(!toggle)
    }
    return (
        <>
            <div className="sidebar-section">
                <div className="sidebar">
                    <div className="sidebar-toggle-icons">
                        <p onClick={handleToggle}>
                            {
                                toggle ? (<AiOutlineDoubleLeft size={30} />) :
                                    (
                                        < AiOutlineDoubleRight size={30} />
                                    )
                            }
                        </p>
                    </div>
                    <Menu toggle={toggle} />
                </div>
                <div className="container">
                    <Home />
                </div>
            </div>
        </>
    )
}

export default Layout