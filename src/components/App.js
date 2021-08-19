import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
require('dotenv').config()

class App extends React.Component {
    state = {
        movies: [],
        searchQuery: ""
    }



    // AXIOS API İLE VERİ ÇEKME
    async componentDidMount() {
        const response = await axios.get(`
        https://api.themoviedb.org/3/list/7104384?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        console.log(response)
        this.setState({ movies: response.data.items }) 
        console.log(response.data.items)
    }

    // AXIOS API İLE VERİ SİLME
    deleteMovie = async (movie) => {

        axios.post(`https://api.themoviedb.org/3/list/7104384/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`)

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (event) => {
        this.setState({
            searchQuery: event.target.value
        })
    }

    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.title.toLocaleLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
            }
        )
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar
                            searchMovieProp={this.searchMovie}
                        />
                    </div>
                </div>
                <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                />
            </div>
        )
    }
}

export default App