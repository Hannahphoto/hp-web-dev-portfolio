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
                    <div className="card text-bg-transparent border-light" style={{ width: "230px" }}>
                        <h5 className="card-title" style={{ color: "white" }}>Card Game: Backend - Logic</h5>
                        <Link onClick={() => openInNewTab("https://gods-and-beasts-game-15c8c3fec868.herokuapp.com/")}>
                            <img src="/images/gods-beasts.png" className="card-cardSize" alt="image of game" id="cardSize"></img>
                        </Link>
                        <div className="card-body">
                        <Link onClick={()=> openInNewTab("https://github.com/ashleyh5440/gods-beasts-game")} className="card-link">Git Hub</Link>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-light" style={{ width: "230px" }}>
                        <h5 className="card-title" style={{ color: "white" }}>Movie Tracks: Backend - API & Redesign</h5>
                        <Link onClick={() => openInNewTab("https://hannahphoto.github.io/movie-track/")}>
                            <img src="/images/movieTracks.png" className="card-cardSize" alt="image of movie track site" id="cardSize"></img>
                        </Link>
                        <div className="card-body">
                        <Link onClick={()=> openInNewTab("https://github.com/Hannahphoto/movie-track")} className="card-link">Git Hub</Link>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-light" style={{ width: "230px" }}>
                        <h5 className="card-title" style={{ color: "white" }}>PWA</h5>
                        <Link onClick={() => openInNewTab("https://text-editor-web-application-6i87.onrender.com/")}>
                            <img src="/images/PWA-textEditor.png" className="card-cardSize" alt="image of PWA app" id="cardSize"></img>
                        </Link>
                        <div className="card-body">
                        <Link onClick={()=> openInNewTab("https://github.com/Hannahphoto/pwa---textEditor")} className="card-link">Git Hub</Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="card text-bg-transparent border-light" style={{ width: "230px" }}>
                        <h5 className="card-title" style={{ color: "white" }}>Weather Dashboard: Server Side api</h5>
                        <Link onClick={() => openInNewTab("https://hannahphoto.github.io/WhatsTheWeatherLike/")}>
                            <img src="/images/weatherDashboard.png" className="card-cardSize" alt="image of Weather Dashboard site" id="cardSize"></img>
                        </Link>
                        <div className="card-body">
                        <Link onClick={()=> openInNewTab("https://github.com/Hannahphoto/WhatsTheWeatherLike")} className="card-link">Git Hub</Link>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-light" style={{ width: "230px" }}>
                        <h5 className="card-title" style={{ color: "white" }}>Note Taker: Express JS</h5>
                        <Link onClick={() => openInNewTab("https://getnotes-app-181ae37a2c03.herokuapp.com/notes")}>
                            <img src="/images/backend-noteTaker.png" className="card-cardSize" alt="image of note taker site" id="cardSize"></img>
                        </Link>
                        <div className="card-body">
                        <Link onClick={()=> openInNewTab("https://github.com/Hannahphoto/backend-notetaker")} className="card-link">Git Hub</Link>
                    </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-light" style={{ width: "230px" }}>
                        <h5 className="card-title" style={{ color: "white" }}>Work Schedular: Third Party API</h5>
                        <Link onClick={() => openInNewTab("https://hannahphoto.github.io/CalendarGetWorkDone-HP/")}>
                            <img src="/images/work-day.png" className="card-cardSize" alt="image of work day schedular" id="cardSize"></img>
                        </Link>
                        <div className="card-body">
                        <Link onClick={()=> openInNewTab("https://github.com/Hannahphoto/CalendarGetWorkDone-HP")} className="card-link">Git Hub</Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}