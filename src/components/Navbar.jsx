import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>

                <div className="row">
                  
                    <div className="col-7">Hannah Price</div>
                    
                    <Link to="/about"><div className="col-1">About Me</div></Link>
                    <div className="col-1"><Link to="/portfolio">Portfolio</Link></div>
                    <div className="col-1"><Link to="/contact">Contact</Link></div>
                    <div className="col-1"><Link to="/resume">Resume</Link></div>
                </div>
      
        </>
    )
}
