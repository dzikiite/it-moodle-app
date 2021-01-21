import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const LoadingSpinner = () => {
    useEffect(() => {
        const effect = (isNeagative) => ({ opacity: 0, x: isNeagative ? -50 : 50, duration: .3 });
        
        let tl = gsap.timeline({ repeat: -1 });

        tl.from('.line1', effect(false));
        tl.from('.line2', effect(false));
        tl.from('.line3', effect(false));
        tl.to('.line1', effect(true));
        tl.to('.line2', effect(true));
        tl.to('.line3', effect(true));
    }, [])

    return ( 
        <div className="flex h-screen justify-center items-center bg-gray-900">
            <div className="w-10 h-10 flex flex-col place-content-between">
                <span className="block w-full h-2 bg-white line1"></span>
                <span className="block w-full h-2 bg-white line2"></span>
                <span className="block w-full h-2 bg-white line3"></span>
            </div>
        </div>
     );
}
 
export default LoadingSpinner;