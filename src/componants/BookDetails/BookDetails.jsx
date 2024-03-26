import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBook } from "../Utility/LocalStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);
    const [isReadClicked, setIsReadClicked] = useState(false);
    const [isWishlistClicked, setIsWishlistClicked] = useState(false);

    const handleReadClick = () => {
       saveBook(idInt);
        if (!isReadClicked) {
            setIsReadClicked(true);
            toast.success(`Added "${book.bookName}" to your reading list!`);
            setReadToastShown(true);
        }else{
            toast.warning('You have alreadey read this book');
        }
    };

    const handleWishlistClick = () => {
       saveBook(idInt);
        if (!isWishlistClicked && !isReadClicked) {
            setIsWishlistClicked(true);
            toast.success(`Added "${book.bookName}" to your wishlist!`);
            setWishlistToastShown(true);
        }else{
            toast.warning('You have already read this book');
        }
    };

    const tags = book.tags || [];

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-20">
                <div className="bg-[#F3F3F3] col-span-1 w-full h-[600px] rounded-xl">
                    <img className="w-[350px] h-[500px] mx-auto pt-20" src={book.image} alt="" />
                </div>
                <div className="lg:p-0 p-8">
                    <h2 className="text-5xl font-medium">{book.bookName}</h2>
                    <p className="pt-5 pb-5 font-bold opacity-80">By : {book.author}</p>
                    <hr />
                    <p className="pt-3 pb-2 font-bold opacity-80">{book.category}</p>
                    <hr />
                    <p className="pt-5"><span className="font-bold">Review : </span>{book.review}</p>
                    <div className="flex pt-5 pb-5">
                        <span className="font-bold">Tag :</span>
                        {tags.map((tag, index) => (
                            <button key={index} className="text-green-500 bg-[#F3F3F3] rounded-full pl-2 pr-2 pt-0 pb-0 ml-3">
                                {tag}
                            </button>
                        ))}
                    </div>
                    <hr />
                    <div className="mt-5">
                        <p className="mb-3">Number of Pages :<span className="text-black font-bold pl-10">{book.totalPages}</span></p>
                        <p className="mb-3">Publisher :<span className="text-black font-bold pl-[100px]">{book.publisher}</span></p>
                        <p className="mb-3">Year of Publishing :<span className="text-black font-bold pl-[39px]">{book.yearOfPublishing}</span></p>
                        <p className="mb-3">Rating :<span className="text-black font-bold pl-[123px]">{book.rating}</span></p>
                    </div>
                    <div className="flex mt-14">
                        <button className="btn btn-outline" onClick={handleReadClick}>Read</button>
                        <button className="btn btn-outline ml-5 btn-accent" onClick={handleWishlistClick}>Wishlist</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
