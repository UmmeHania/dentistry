import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';



import './Home.css';
import Services from './Services/Services';


const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;