import { Link } from 'react-router-dom';

export default function NavBar({ }) {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-teriary">
                <div className="container-fluid">
                <div className="navbar-brand col-7" href="#" style={{color: 'whitesmoke',fontSize: '3vw'}}>Hannah Price</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" style={{color: 'whitesmoke'}} >
                    <span className="navbar-toggler-icon" style={{color: 'whitesmoke'}}></span>
                    </button>
                    <div className="collapse navbar-collapse"  id="navbarTogglerDemo02">
                        
                    <ul className="navbar-nav me-auto" >
                        <li className="nav-item col-1"><Link className="nav-link" id="link" to="/about">About</Link></li>
                        <li className="nav-item col-1"><Link className="nav-link" id="link" to="/portfolio">Portfolio</Link></li>
                        <li className="nav-item col-1"><Link className="nav-link" id="link" to="/contact">Contact</Link></li>
                        <li className="nav-item col-1"><Link className="nav-link" id="link" to="/resume">Resume</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
