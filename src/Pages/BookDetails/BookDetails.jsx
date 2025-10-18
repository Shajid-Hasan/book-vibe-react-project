import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();

    const singleBook = data.find((book) => book.bookId === bookId);

    if (!singleBook) {
        return <p className="text-center my-10 text-4xl text-red-500">Book not found!</p>;
    }

    const {
        bookName,
        image,
        author,
        tags,
        review,
        category,
        totalPages,
        publisher,
        yearOfPublishing,
        rating,
    } = singleBook;

    const handelMarkAsRead = (id) => {
        // store with id
        // where to store
        // array or collection
        // if book already exist then show a alart
        // if book not exist then push in the collection or array

        addToStoredDB(id)
    }

    return (
        <div className="flex flex-col md:flex-row w-11/12 md:w-3/4 mx-auto gap-10 my-10">
            {/* Image section */}
            <div className="bg-[#f3f3f3] p-6 flex justify-center items-center rounded-lg">
                <img
                    className="h-[500px] w-auto object-contain"
                    src={image}
                    alt={bookName}
                />
            </div>

            {/* Details section */}
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{bookName}</h2>
                <p className="text-gray-600 mb-2">By: {author}</p>
                <p className="text-sm text-green-600 mb-2">{category}</p>
                <p className="mt-4 mb-4"><span className="font-semibold">Review:</span> {review}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
                            #{tag}
                        </span>
                    ))}
                </div>

                <p>📘 <strong>Pages:</strong> {totalPages}</p>
                <p>🏢 <strong>Publisher:</strong> {publisher}</p>
                <p>📅 <strong>Year:</strong> {yearOfPublishing}</p>
                <p>⭐ <strong>Rating:</strong> {rating}</p>

                <div className="mt-5 flex gap-3">
                    <button onClick={()=> handelMarkAsRead(id)} className="btn btn-info">Read</button>
                    <button className="btn btn-success">WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
