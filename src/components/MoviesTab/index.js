import {useState, useEffect} from "react";
import MovieItem from "../MovieItem";

import "./index.css"

const MoviesTab = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetchMovieList();
      }, []);
    
      const fetchMovieList = async () => {

        const response = await fetch('https://hoblist.com/api/movieList', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category: 'movies',
            language: 'kannada',
            genre: 'all',
            sort: 'voting',
          }),
        });

      const jsonData = await response.json()
      const moviesList = jsonData.result
      
      setMovieList([...moviesList]);
      };

      const renderMoviesList = () => (
        movieList.map((eachObj) => (
          <MovieItem
          key = {eachObj._id}
          movieItem = {eachObj}
          />
        ))
      )

      const renderSidebar = () => (
        <div className="side-bar">
          <h1>
            Movies Tab
          </h1>
          <ul className="company-details">
            <li className="company-details-heading">
              Company: <span className="company-details-para">
                Geeksynergy Technologies Pvt Ltd
              </span>
            </li>
            <li className="company-details-heading">
              Address: <span className="company-details-para">
                Sanjayanagar, Bengaluru-56
              </span>
            </li>
            <li className="company-details-heading">
              Phone: <a href="" className="company-details-para">
                XXXXXXX089
              </a>
            </li>
            <li className="company-details-heading">
            Mail: <a href = "" className="company-details-para">
                 XXXXXXX@gmail.com
              </a>
            </li>
          </ul>
        </div>
      )

      const renderheaderSection = () => (
        <div className="header-section">
          <h1>
            Movies Tab
          </h1>
        </div>
      )


      const footerSection = () => (
        <ul className="footer-details">
            <li className="footer-details-heading">
              Company: <span className="footer-details-para">
                Geeksynergy Technologies Pvt Ltd
              </span>
            </li>
            <li className="footer-details-heading">
              Address: <span className="footer-details-para">
                Sanjayanagar, Bengaluru-56
              </span>
            </li>
            <li className="footer-details-heading">
              Phone: <a href="" className="footer-details-para">
                XXXXXXX089
              </a>
            </li>
            <li className="footer-details-heading">
            Mail: <a href = "" className="footer-details-para">
                 XXXXXXX@gmail.com
              </a>
            </li>
          </ul>
      )

    return (
      <div className="movie-container">
        {
          renderSidebar()
        }
        {
          renderheaderSection()
        }
        <div className="all-movies-container">
        {
          renderMoviesList()
        }
        </div>
        {
          footerSection()
        }
      </div>
    )
}


export default MoviesTab;