import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className='pt-16'>

                <Outlet></Outlet>
            </section>


            <Footer></Footer>

        </div>
    );
};

export default Root;