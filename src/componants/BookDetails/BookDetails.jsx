import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);

    // Assuming `tags` is an array property of the `book` object
    const tags = book.tags || []; 

    return (
        <div>
            <div className="grid grid-cols-2 mt-20 gap-20">
                <div className="bg-[#F3F3F3] col-span-1 w-full h-[600px] rounded-xl">
                    <img className="w-[350px] h-[500px] mx-auto pt-20" src={book.image} alt="" />
                </div>
                <div>
                    <h2 className="text-5xl font-medium">{book.bookName}</h2>
                    <p className="pt-3 pb-3 font-bold opacity-60">By : {book.author}</p>
                    <hr />
                    <p className="pt-2 pb-2 font-bold opacity-60">{book.category}</p>
                    <hr />
                    <p className="pt-3"><span className="font-bold">Review : </span>{book.review}</p>
                    <div className="flex pt-5 pb-5">
                        <span className="font-bold">Tag :</span>
                        {tags.map((tag, index) => (
                            <button key={index} className="text-green-500 bg-[#F3F3F3] rounded-full pl-2 pr-2 pt-0 pb-0 ml-3">
                                {tag}
                            </button>
                        ))}
                    </div>
                    <hr />

                   
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
