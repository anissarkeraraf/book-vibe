import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredBook } from '../Utility/LocalStorage';
import { CiLocationOn } from "react-icons/ci";

const ListedBooks = () => {
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
        <div>
            <div className='bg-[#F3F3F3] h-[80px] w-full mt-10'>
                <h2 className='text-2xl font-bold text-center pt-5'>Books</h2>
            </div>
            <div className='mt-20'>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 border-b-0 border-l-0 border-r-0 rounded-box p-6">
                        {items.map(book => (
                            <div key={book.id} className="card card-side bg-base-100 shadow-xl mb-10">
                                <div className='bg-[#F3F3F3] w-[290px] h-[300px] rounded-2xl m-10'>
                                    <img className="w-[250px] h-[280px] p-5 rounded-2xl pt-10 pl-14" src={book.image} alt={book.bookName} />
                                </div>

                                <div className='m-10'>
                                    <h2 className="card-title text-2xl mb-5">{book.bookName}</h2>
                                    <p className='mb-3 font-bold opacity-80'>By: {book.author}</p>

                                    <div className='flex'>
                                        <div>
                                            <span className='font-bold'>Tag :</span>
                                            {book.tags.map((tag, index) => (
                                                <button key={index} className="text-green-500 bg-[#F3F3F3] rounded-full pl-2 pr-2 pt-0 pb-0 ml-1">
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                        <p className='flex pl-10'><CiLocationOn className='text-2xl'></CiLocationOn> <span className='pl-2'>Year of Publishing :</span>{book.yearOfPublishing}</p>
                                    </div>

                                    <div className="flex">
                                        <p>{book.category}</p>
                                        {/* Assuming `rating` is a property of `book` */}
                                        <p className="flex justify-center">{book.rating}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 border-b-0 border-l-0 border-r-0 rounded-box p-6"></div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
