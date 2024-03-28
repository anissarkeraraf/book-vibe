import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredBook } from '../Utility/LocalStorage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'; // Import Recharts components

const PagesToRead = () => {
    const books = useLoaderData();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredBook();
        if (books.length > 0) {
            const booksList = books.filter(book => storedBookIds.includes(book.id));
            setItems(booksList);
        }
    }, [books]);

    return (
        <div className=' bg-[#F8F8F8] lg:w-[1100px] lg:h-[550px] mx-auto mb-10 mt-10'>

            <div className='mx-auto ml-8 pt-10'>
                <BarChart width={1000} height={500} data={items}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalPages" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default PagesToRead;
