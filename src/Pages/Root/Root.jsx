import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';
import Banner from '../../Components/Banner/Banner';


const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            
            <Outlet></Outlet>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;