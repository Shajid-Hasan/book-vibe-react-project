import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams()
    const bookId = parseInt(id);
    const data = useLoaderData()
    console.log(id, data)

    const singleBook = data.find((book) => book.bookId === bookId);

    const { bookName, image, author, tags, review} = singleBook
    console.log(singleBook)

    return (
        <div className='flex w-2/3 mx-auto gap-10 my-10'>
            <div>
                <img className='w-48 mx-auto' src={image} alt="image" />
            </div>
            <div>
                <h5 className='mt-2 '>{bookName}</h5>
                <h5 className='mt-2'>By : {author}</h5>
                <div className='border-t-1 mt-2'>
                    {
                        tags.map((tag) => <button>{tag}</button>)
                    }
                </div>
                <h4>{review}</h4>
                <button className="btn btn-info m-2">Read</button>
                <button className="btn btn-success m-2">WishList</button>
            </div>

        </div>
    );
};

export default BookDetails;