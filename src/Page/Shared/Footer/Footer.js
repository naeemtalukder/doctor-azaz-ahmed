import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='color-bg text-white text-center pt-4 pb-5 mt-5' style={{ height: '40px' }}>
            <p><small>CopyRight &copy; {year} By Dr. Azaz Ahmed</small></p>
        </footer>
    );
};

export default Footer;