import { Link } from 'react-router-dom';

export default function NavBar({ }) {
    return (
        <>
       
            <nav className="row">
            
             <div className="col-7">Hannah Price</div>
         
                    <div className="col-1 "><Link id="link" to="/about">About Me</Link></div>
                    <div className="col-1 "><Link id="link" to="/portfolio">Portfolio</Link></div>
                    <div className="col-1 "><Link id="link" to="/contact">Contact</Link></div>
                    <div className="col-1 "><Link id="link" to="/resume">Resume</Link></div>
       
            </nav>
           
        </>
    )
}
