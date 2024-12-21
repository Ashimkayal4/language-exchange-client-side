import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Root = () => {
    return (
        <div>
            <section className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </section>

            <section className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </section>

            <section>

            </section>
        </div>
    );
};

export default Root;