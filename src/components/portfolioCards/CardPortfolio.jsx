import { Link } from 'react-router-dom';

export default function CardPortfolio() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <div className="card text-bg-transparent border-light" style={{ width: "250px" }}>
                        <Link onClick={() => openInNewTab("https://gods-and-beasts-game-15c8c3fec868.herokuapp.com/")}>
                            <img src="/images/gods-beasts.png" className="card-cardSize" alt="image of game" id="cardSize"></img>
                        </Link>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-light" style={{ width: "250px" }}>
                        <Link onClick = {() => openInNewTab("https://hannahphoto.github.io/movie-track/")}>
                        <img src="/images/movieTracks.png" className="card-cardSize" alt="image of movie track site" id="cardSize"></img>
                        </Link>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-light" style={{ width: "250px" }}>
                        <Link onClick = {() => openInNewTab("https://text-editor-web-application-6i87.onrender.com/")}>
                        <img src="/images/PWA-textEditor.png" className="card-cardSize" alt="image of PWA app" id="cardSize"></img>
                        </Link>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="card text-bg-transparent border-light" style={{ width: "250px" }}>
                        <Link onClick = {() => openInNewTab("https://hannahphoto.github.io/WhatsTheWeatherLike/")}>
                        <img src="/images/weatherDashboard.png" className="card-cardSize" alt="image of Weather Dashboard site" id="cardSize"></img>
                        </Link>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-light" style={{ width: "250px" }}>
                        <Link onClick = {() => openInNewTab("https://getnotes-app-181ae37a2c03.herokuapp.com/notes")}>
                        <img src="/images/backend-noteTaker.png" className="card-cardSize" alt="image of note taker site" id="cardSize"></img>
                        </Link>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-light" style={{ width: "250px" }}>
                        <Link onClick = {() => openInNewTab("https://text-editor-web-application-6i87.onrender.com/")}>
                        <img src="/images/backend" className="card-cardSize" alt="image of note taker site" id="cardSize"></img>
                        </Link>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}