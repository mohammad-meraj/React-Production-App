import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import Navber from '../Header/Navber';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet>
                <Installation></Installation>
              <Apps></Apps>
            </Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;