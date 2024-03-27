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
        <div className='mt-36'>
            
            <BarChart width={1200} height={400} data={items}>
                <CartesianGrid />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalPages" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default PagesToRead;
