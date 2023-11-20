import {useState, useEffect} from "react";

import "./index.css"

const MoviesTab = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        fetchMovieList(token);
      }, []);
    
      const fetchMovieList = async (token) => {
        const apiUrl = 'https://hoblist.com/api/movieList';
    
        const requestData = {
          category: 'movies',
          language: 'kannada',
          genre: 'all',
          sort: 'voting',
        };
    
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(requestData),
          });
    
          if (response.ok) {
            const data = await response.json();
            setMovieList(data);
          } else {
            console.error('Error making API request:', response.statusText);
          }
        } catch (error) {
          console.error('Error making API request:', error.message);
        }
      };

    return (
        <h1>
            MoviesTab
        </h1>
    )
}


export default MoviesTab;