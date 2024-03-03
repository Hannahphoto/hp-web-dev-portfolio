import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// bring in the pages so router will show appropriate view/page
import ErrorPage from './pages/ErrorPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/portfolio',
    element: <PortfolioPage/>,
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: 'resume',
    element: <Resume/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router ={router}/>
) 
