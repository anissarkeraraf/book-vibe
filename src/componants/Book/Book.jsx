import { CiStar } from "react-icons/ci";
const Book = ({ book }) => {
    const { image, bookName, author, category, rating, tags } = book;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="w-full h-[250px] p-5 rounded-2xl" src={image} alt={bookName} />
            </figure>
            <div className="flex pl-5">
                {tags.map((tag, index) => (
                    <button key={index} className="text-green-500 bg-[#F3F3F3] rounded-full pl-2 pr-2 pt-0 pb-0 ml-1">
                        {tag}
                    </button>
                ))}
            </div>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By : {author}</p>
                <div className="flex">
                    <p>{category}</p>
                    <p className="flex justify-center">{rating}<CiStar className="text-2xl pl-2"></CiStar></p>
                </div>
            </div>
        </div>
    );
};

export default Book;
