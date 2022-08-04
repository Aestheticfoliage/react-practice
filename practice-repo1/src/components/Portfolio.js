import React, { useState } from 'react';
import About from './pages/about';

export default function Portfolio() {
    const [ currentPage, setCurrentPage] = useState('Home');
    // checking the value of currentPage, we return the corresponding component 
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        if (currentPage === 'Contact'){
            return <Contact />;
        };

        const handlePageChange = (page) =>setCurrentPage(page);

        return
        }
    }
}