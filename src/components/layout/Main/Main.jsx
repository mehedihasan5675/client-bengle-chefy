import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';


const Main = () => {
    const navigation=useNavigation()

    return (
        <div className="relative">
            <Header></Header>
            <div>{navigation.state === 'loading' && <div className='flex justify-center absolute top-1/2 left-1/2 pt-20 h-screen bg-white items-center'><button className="btn btn-square loading w-20 mx-auto"></button></div>}</div>
            <Outlet ></Outlet>

            
            <Footer></Footer>
        </div>
    );
};

export default Main;