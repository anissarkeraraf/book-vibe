import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredBook } from '../Utility/LocalStorage';
import { CiLocationOn } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineContactPage } from "react-icons/md";

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
                            <div key={book.id} className="card lg:card-side lg:h[300px] bg-base-100 border-2 shadow-xl mb-10">
                                <div className='bg-[#F3F3F3] w-[290px] rounded-2xl lg:m-10 mt-8 m-auto'>
                                    <img className="w-[250px] h-[280px] p-5 rounded-2xl pt-10 pl-14" src={book.image} alt={book.bookName} />
                                </div>

                                <div className='m-10'>
                                    <h2 className="card-title text-2xl mb-5">{book.bookName}</h2>
                                    <p className='mb-3 font-bold opacity-80'>By: {book.author}</p>

                                    <div className='lg:flex'>
                                        <div>
                                            <span className='font-bold'>Tag :</span>
                                            {book.tags.map((tag, index) => (
                                                <button key={index} className="text-green-500 bg-[#F3F3F3] rounded-full pl-2 pr-2 pt-0 pb-0 ml-1">
                                                    #{tag}
                                                </button>
                                            ))}
                                        </div>
                                        <p className='flex lg:pl-10 lg:pt-0 pt-3'><CiLocationOn className='text-2xl'></CiLocationOn> <span className='pl-2'>Year of Publishing :</span>{book.yearOfPublishing}</p>
                                    </div>

                                    <div className='lg:flex mt-5 mb-5'>
                                        <p className='flex opacity-70 mr-10'><LuUsers2 className='text-2xl mr-3'></LuUsers2> Publisher : {book.publisher}</p>
                                        <p className='flex opacity-70'><MdOutlineContactPage className='text-2xl mr-3'></MdOutlineContactPage> Pages : {book.totalPages}</p>
                                    </div>
                                    <hr />

                                    <div className="lg:flex mt-5 lg:pb-0 pb-3">
                                        <div className='lg:mr-2 mb-2'>
                                            <button className='rounded-full text-[#0d99ff] bg-[#E0EEFF] pt-0 pb-0 pl-2 pr-2'>Category : {book.category}</button>
                                        </div>
                                        {/* Assuming `rating` is a property of `book` */}
                                        <div>
                                            <button className='rounded-full text-[#ffc774] pt-0 pb-0 pl-2 pr-2 bg-[#fff3e0]'> Rating :{book.rating}</button>
                                        </div>
                                        <div className='lg:ml-3 mt-2'>
                                            <Link to={`/book/${book.id}`}>
                                                <button className='pt-0 pb-0 pl-2 pr-2 bg-[#23be0a] text-white rounded-full'>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 border-b-0 border-l-0 border-r-0 rounded-box p-6">
                        {items.map(book => (
                            <div key={book.id} className="card lg:card-side lg:h[300px] bg-base-100 border-2 shadow-xl mb-10">
                                <div className='bg-[#F3F3F3] w-[290px] rounded-2xl lg:m-10 mt-8 m-auto'>
                                    <img className="w-[250px] h-[280px] p-5 rounded-2xl pt-10 pl-14" src={book.image} alt={book.bookName} />
                                </div>

                                <div className='m-10'>
                                    <h2 className="card-title text-2xl mb-5">{book.bookName}</h2>
                                    <p className='mb-3 font-bold opacity-80'>By: {book.author}</p>

                                    <div className='lg:flex'>
                                        <div>
                                            <span className='font-bold'>Tag :</span>
                                            {book.tags.map((tag, index) => (
                                                <button key={index} className="text-green-500 bg-[#F3F3F3] rounded-full pl-2 pr-2 pt-0 pb-0 ml-1">
                                                    #{tag}
                                                </button>
                                            ))}
                                        </div>
                                        <p className='flex lg:pl-10 lg:pt-0 pt-3'><CiLocationOn className='text-2xl'></CiLocationOn> <span className='pl-2'>Year of Publishing :</span>{book.yearOfPublishing}</p>
                                    </div>

                                    <div className='lg:flex mt-5 mb-7'>
                                        <p className='flex opacity-70 mr-10'><LuUsers2 className='text-2xl mr-3'></LuUsers2> Publisher : {book.publisher}</p>
                                        <p className='flex opacity-70 lg:pt-0 pt-5'><MdOutlineContactPage className='text-2xl mr-3'></MdOutlineContactPage> Pages : {book.totalPages}</p>
                                    </div>
                                    <hr />

                                    <div className="lg:flex mt-5 lg:pb-0 pb-3 pt-5">
                                        <div className='lg:mr-2 mb-2'>
                                            <button className='rounded-full text-[#0d99ff] bg-[#E0EEFF] pt-0 pb-0 pl-2 pr-2'>Category : {book.category}</button>
                                        </div>
                                        {/* Assuming `rating` is a property of `book` */}
                                        <div>
                                            <button className='rounded-full text-[#ffc774] pt-0 pb-0 pl-2 pr-2 bg-[#fff3e0]'> Rating :{book.rating}</button>
                                        </div>
                                        <div className='lg:ml-3 lg:mt-0 mt-2'>
                                            <Link to={`/book/${book.id}`}>
                                                <button className='pt-0 pb-0 pl-2 pr-2 bg-[#23be0a] text-white rounded-full'>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
