import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-base-200 lg:h-[500px] rounded-xl mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/HKsmYzS/pngwing-1.png" className="lg:max-w-sm rounded-lg pr-10" alt="Book Image" />
                <div className='lg:pl-16'>
                    <p className='lg:text-6xl text-2xl lg:pb-10 pb-4'>Books to freshen up your bookshelf</p>
                    <div className='mt-5 lg:mt-0 ml-32 lg:ml-0 mb-5 lg:mb-0'>
                        <Link to="/books" className="button lg:pl-6 lg:pr-6 rounded-lg lg:pt-4 pl-4 pr-4 pb-4 pt-4 lg:pb-4 bg-green-500">View The List</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
