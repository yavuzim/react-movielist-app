import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
class App extends React.Component {
    state = {
        movies: [],
        searchQuery: ""
    }

    // FETCH API İLE VERİ ÇEKME
    /*   async componentDidMount() {
          const baseURL = "http://localhost:3002/movies"
          const response = await fetch(baseURL)
          const data = await response.json();
          this.setState({ movies: data })
      } */

    // AXIOS API İLE VERİ ÇEKME
    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies")
        this.setState({ movies: response.data })
    }

    // FETCH API İLE VERİ SİLME
    /* deleteMovie = async (movie) => {

        const baseURL = `http://localhost:3002/movies/${movie.id}`
        await fetch(baseURL, {
            method: "DELETE"
        })

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )

        this.setState(state => ({
            movies: newMovieList
        }))
    } */

    // AXIOS API İLE VERİ SİLME
    deleteMovie = async (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`)

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
                return movie.name.toLocaleLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
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