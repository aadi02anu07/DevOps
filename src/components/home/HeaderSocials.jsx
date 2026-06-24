import React from 'react';
import { FaGithub, FaLinkedinIn, FaDev } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='mailto:aadi02anu07@gmail.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev /> {/* Placeholder for Email using Dev icon if envelope is unavailable, or change icon later */}
            </a>

            <a href='https://www.github.com/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
        </div>
    );
};

export default HeaderSocials;
