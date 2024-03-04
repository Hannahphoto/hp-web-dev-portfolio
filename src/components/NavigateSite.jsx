import {useState} from 'react'
import AboutPage from '../pages/AboutPage'
import PortfolioPage from '../pages/PortfolioPage'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'

export default function NavigateSite(){
    const [currentPage, setCurrentPage] = useState('AboutPage');

    // depending on the value of the currentPage we return the responding component to render
    const renderPage = () => {
        if(currentPage === 'About'){
            return <AboutPage/>;
        }
        if(currentPage === 'Portfolio'){
            return <PortfolioPage/>;
        }
        if(currentPage === 'Contact'){
            return <Contact/>;
        }
        if(currentPage === 'Resume'){
            return <Resume/>;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return(

    )
}