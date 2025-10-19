import { Star } from 'lucide-react';
import { Link } from 'react-router';
const Book = ({ singleBook }) => {

    const { bookName, author, image, rating, category, tags, bookId } = singleBook
    return (
        <>
            <Link to={`/bookDetails/${bookId}`}>
                <div className="card bg-base-100 w-90 border-1 border-gray-500 shadow-sm">
                    <figure className="bg-[#f3f3f3] w-2/3 mx-auto p-1 mt-5 rounded-2xl">
                        <img className="h-[200px] p-3"
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className='flex justify-center gap-30 text-green-500 mt-5'>
                        {
                            tags.map((tag) => <button>{tag}</button>)
                        }
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">
                            {bookName}
                        </h2>
                        <div className="">Book by : {author}</div>
                        <div className="flex justify-between mt-2 p-2 border-t-1 border-dashed">
                            <div className="badge badge-outline border-none">{category}</div>
                            <div className="badge badge-outline border-none">{rating}<Star className='h-4' /></div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Book;