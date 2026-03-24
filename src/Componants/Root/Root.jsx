import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import Navber from '../Header/Navber';
import Apps from '../Pages/Apps/Apps';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet>
              <Apps></Apps>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;