import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 200 }} >
                <div className="Tilt-inner"><p style={{paddingTop: '60px', paddingLeft: '90px', fontSize: '25px', fontWeight: 'bold', color: 'white'}}>:D</p></div>
            </Tilt>
        </div>
    );
}

export default Logo;