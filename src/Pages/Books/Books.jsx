import { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    // const [allBooks, setAllBooks] = useState([])

    // useEffect(()=> {
    //     fetch('../../../public/books.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     setAllBooks(data)
    // },[])

    // const bookPromise = fetch('../../../public/books.json')
    // .then(res => res.json())
    // .then(data => console.log(data))


    return (
        <div>
            <h1 className='text-center text-2xl font-semi-bold'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                <Suspense fallback={<span>loading........</span>}>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </Suspense>
            </div>

        </div>
    );
};

export default Books;