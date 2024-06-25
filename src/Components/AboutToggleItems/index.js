import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import './index.css';

const AboutToggleItems = ({ item, isToggled, toggleItems }) => {
    const { id, title, description } = item;

    return (
        <li className='about-toggle-item'>
            <div className={isToggled ? 'about-toggle-container-active' : 'about-toggle-container'} onClick={() => toggleItems(id)}>
                <h2 className={isToggled ? 'about-toggle-title-active': 'about-toggle-title'}>{title}</h2>
                {isToggled ? <FaMinus className={isToggled ? 'toggle-icon-active' : 'toggle-icon'} /> : <FaPlus className={isToggled ? 'toggle-icon-active' : 'toggle-icon'} />}
            </div>
            {isToggled && <p className='about-toggle-description'>{description}</p>}
        </li>
    );
};

export default AboutToggleItems;
