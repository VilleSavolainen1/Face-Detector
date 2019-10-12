import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if(isSignedIn) {
            return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='white f3 link dim black underline pa3 pointer center'>Sign out</p>
            </nav>
            );
        } else {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('signin')} className='white f3 link dim black underline pa3 pointer'>Sign in</p>
                    <p onClick={() => onRouteChange('register')} className='white f3 link dim black underline pa3 pointer'>Register</p>
                </nav>
            );
        }
}

export default Navigation;