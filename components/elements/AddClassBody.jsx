import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AddClassBody() {
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        const bodyElement = document.querySelector('body');

        if (bodyElement) {
            bodyElement.classList.remove('home-page-3', 'home-page-2');
            if (pathname === '/index-2') {
                bodyElement.classList.add('home-page-2');
            }
            if (pathname === '/index-3') {
                bodyElement.classList.add('home-page-3');
            }
        }
    }, [pathname]);

    return null;
}
