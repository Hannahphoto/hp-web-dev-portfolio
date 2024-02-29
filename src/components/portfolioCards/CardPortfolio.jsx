export default function CardPortfolio() {
    return (
        <>
            <div className="row row-cols-3 row-cols-md-3 g-4">
                <div className="col-1">
                    <div className="card text-bg-transparent border-warning" style={{ width: "300px" }}>
                        <img src="/images/gods-beasts.png" className="card-img" alt="image of game" id="img"></img>
                        <div className="card-img-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-3 row-cols-md-3 g-4">
                <div className="col-3">
                    <div className="card text-bg-transparent border-warning" style={{ width: "300px" }}>
                        <img src="/images/movieTracks.png" className="card-img" alt="image of movie track site" id="img"></img>
                        <div className="card-img-overlay bg-transparent" style={{ width: " 0px", height: "0px" }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}