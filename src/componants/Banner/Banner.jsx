import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[500px] rounded-xl mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/HKsmYzS/pngwing-1.png" className="max-w-sm rounded-lg pr-10" alt="Book Image" />
                <div className='pl-16'>
                    <p className='text-6xl pb-10'>Books to freshen up your bookshelf</p>
                    <Link to="/books" className="button pl-6 pr-6 rounded-lg pt-4 pb-4 bg-green-500">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
