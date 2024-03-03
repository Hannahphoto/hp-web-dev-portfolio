import { Link } from 'react-router-dom';

export default function Footer() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    return (
        <div className="container text-center">
            <div className="row align-items-end">
                <Link onClick={() => openInNewTab("https://github.com/Hannahphoto")}>    
                <img className="col" src="/images/github-mark-white.png" alt="git logo" id="icon"></img>
                </Link>
            </div>
            <div>
            <Link onClick={() => openInNewTab("https://www.linkedin.com/in/hannah-price-880299114/")}>
            <img className="col" src="/images/LI-In-Bug.png" alt="linked-in logo" id="LinkdIn"></img>
            </Link>
            </div>
            {/* <div>
            <img className="col" src="/images/dslr-camera.png" alt="camera icon" id="#photo"></img>
            </div> */}
        </div>
    )
}