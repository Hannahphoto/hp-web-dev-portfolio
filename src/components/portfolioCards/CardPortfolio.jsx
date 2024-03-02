export default function CardPortfolio() {
    return (
        <>
            <div className="row">
                <div className="col-3">
                    <div className="card text-bg-transparent border-info" style={{ width: "250px" }}>
                        <img src="/images/gods-beasts.png" className="card-cardSize" alt="image of game" id="cardSize"></img>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-info" style={{ width: "250px" }}>
                        <img src="/images/movieTracks.png" className="card-cardSize" alt="image of movie track site" id="cardSize"></img>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-info" style={{ width: "250px" }}>
                        <img src="/images/PWA-textEditor.png" className="card-cardSize" alt="image of PWA app" id="cardSize"></img>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="card text-bg-transparent border-info" style={{ width: "250px" }}>
                        <img src="/images/weatherDashboard.png" className="card-cardSize" alt="image of Weather Dashboard site" id="cardSize"></img>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-info" style={{ width: "250px" }}>
                        <img src="/images/backend-noteTaker.png" className="card-cardSize" alt="image of note taker site" id="cardSize"></img>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-bg-transparent border-info" style={{ width: "250px" }}>
                        <img src="/images/backend" className="card-cardSize" alt="image of note taker site" id="cardSize"></img>
                        <div className="card-cardSize-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}