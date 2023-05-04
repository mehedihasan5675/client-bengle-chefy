import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';


const Main = () => {
    const navigation=useNavigation()

    return (
        <div className="relative">
            <Header></Header>
            <div>{navigation.state === 'loading' && <div className='flex justify-center absolute top-0   h-full w-full z-50 bg-white items-center'><button className="btn btn-square loading flex items-center justify-center mx-auto"></button></div>}</div>
            <Outlet ></Outlet>

            
            <Footer></Footer>
        </div>
    );
};

export default Main;