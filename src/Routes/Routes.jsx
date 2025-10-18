import React from 'react';
import { createBrowserRouter} from 'react-router'
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Details from '../Pages/BookDetails/BookDetails';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Components/ReadList/ReadList';


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('../../public/books.json'),
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/readList',
                Component: ReadList
            },
            {
                path: '/bookDetails/:id',
                loader: () => fetch('../../public/books.json'),
                Component: BookDetails
            }
        ]
    }
])
