import { Link } from 'react-router-dom';

export default function NavBar({ }) {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-teriary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <div className="navbar-brand col-7" href="#" style={{color: 'whitesmoke',fontSize: '3vw'}}>Hannah Price</div>

                        <div className="nav-item col-1"><Link id="link" to="/about">About Me</Link></div>
                        <div className="nav-item col-1"><Link id="link" to="/portfolio">Portfolio</Link></div>
                        <div className="nav-item col-1"><Link id="link" to="/contact">Contact</Link></div>
                        <div className="nav-item col-1"><Link id="link" to="/resume">Resume</Link></div>
                       
                    </div>
                </div>
            </nav>

        </>
    )
}
