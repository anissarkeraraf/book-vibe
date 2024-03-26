import React from 'react';
import Tabs from '../TAbs/Tabs';


const ListedBooks = () => {
    return (
        <div>
            <div className='bg-[#F3F3F3] h-[80px] w-full mt-10'>
                <h2 className='text-2xl font-bold text-center pt-5'>Books</h2>
            </div>
            <div className='mt-20'>
            <Tabs></Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;