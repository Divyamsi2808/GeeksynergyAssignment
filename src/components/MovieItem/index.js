
import { IoCaretUpSharp, IoCaretDownSharp  } from "react-icons/io5";
import "./index.css";

const MovieItem = (props) => {
    const {movieItem} = props
    const date = new Date(movieItem.releasedDate)
    const month = date. toLocaleString('default', { month: 'long' });
    return (
        <div className="movie-item-container">
            <div className="movie-item">
            <div className="vote-div">
                <IoCaretUpSharp className="icons"/>
                <p className="vote-text">
                    {
                        movieItem.totalVoted
                    }
                </p>
                <IoCaretDownSharp className="icons"/>
                <h1 className="vote-heading">
                    Votes
                </h1>
            </div>
            <img
            src = {movieItem.poster}
            alt = "poster"
            className="poster-img"
            />

            <div className="movie-details">
                <h1 className="movie-title">
                    {movieItem.title}
                </h1>
                <p className="info-para">
                    <span className="movie-properties">
                        Genre:
                    </span>
                    {" "} {movieItem.genre}
                </p>
                <p className="info-para">
                    <span className="movie-properties">
                        Director:
                    </span>
                    {" "} {movieItem.director}
                </p>
                <p className="info-para">
                    <span className="movie-properties">
                        Starring:
                    </span>
                    {" "} {movieItem.stars}
                </p>
                <p className="date-para">
                    Mins | {movieItem.language} | {date.getDate()} {month}
                </p>
                <p className="views-para">
                    {movieItem.pageViews} views | Voted by {movieItem.totalVoted}
                </p>

            </div>
        </div>
        <button type="button" className="trailer-btn">
            Watch Trailer
        </button>
        </div>
    )
}


export default MovieItem;