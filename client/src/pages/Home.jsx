import React from 'react';
import Hero from '../components/Hero';
import Friends from '../components/Friends';
import HeroCard from '../components/HeroCard';

const Home = () => {
    return (
        <div>
            <Hero />
            <HeroCard />
            <Friends />
        </div>
    );
};

export default Home;