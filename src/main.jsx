import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componants/Root/Root.jsx';
import ListedBooks from './componants/ListedBooks/ListedBooks.jsx';
import PagesToRead from './componants/PagesToRead/PagesToRead.jsx';
import Home from './componants/Home/Home.jsx';
import BookDetails from './componants/BookDetails/BookDetails.jsx';
import NotFound from './componants/NotFound/NotFound.jsx';
// import NotFound from './componants/NotFound/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '*',
    element:<NotFound></NotFound>
  },
  {
    path: "/",
    element: <Root></Root>,
  
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/read',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('/books.json')
        
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
    ]
    
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

