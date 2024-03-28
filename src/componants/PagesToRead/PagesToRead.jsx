// import React, { useEffect, useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import { getStoredBook } from '../Utility/LocalStorage';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'; // Import Recharts components

// const PagesToRead = () => {
// const books = useLoaderData();
// const [items, setItems] = useState([]);

// useEffect(() => {
//     const storedBookIds = getStoredBook();
//     if (books.length > 0) {
//         const booksList = books.filter(book => storedBookIds.includes(book.id));
//         setItems(booksList);
//     }
// }, [books]);

//     return (
//         <div className=' bg-[#F8F8F8] lg:w-[1100px] lg:h-[550px] mx-auto mb-10 mt-10'>

//             {/* <div className='mx-auto ml-8 pt-10'>
//                 <BarChart width={1000} height={500} data={items}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="bookName" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="totalPages" fill="#8884d8" />
//                 </BarChart>
//             </div> */}


//         </div>
//     );
// };

// export default PagesToRead;

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell,Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { getStoredBook } from '../Utility/LocalStorage';

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

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
            <BarChart
                width={1000}
                height={500}
                data={items}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip></Tooltip>
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {items.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;


