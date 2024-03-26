import React, { useEffect, useState } from 'react';
import Tabs from '../TAbs/Tabs';
import { useLoaderData } from 'react-router-dom';
import { getStoredBook } from '../Utility/LocalStorage';


const ListedBooks = () => {
    const books = useLoaderData();

    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredBook();
        if (books.length > 0) {
            const booksList = books.filter(job => storedBookIds.includes(job.id))
            // console.log(books, storedBookIds, booksList);
            setItems(booksList);
        }
    }, [])
    return (
        <div>
            <div className='bg-[#F3F3F3] h-[80px] w-full mt-10'>
                <h2 className='text-2xl font-bold text-center pt-5'>Books</h2>
            </div>
            <div className='mt-20'>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 border-b-0 border-l-0 border-r-0 rounded-box p-6">{items.length}</div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 border-b-0 border-l-0 border-r-0 rounded-box p-6"></div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;