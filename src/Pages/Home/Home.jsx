import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();
    return (
        <div>
            <title>Book vibe - Home</title>
            <main className='min-h-[calc(100vh-285px)]'>
                <Banner></Banner>
                <Books data={data}></Books>
            </main>

        </div>
    );
};

export default Home;