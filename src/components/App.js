import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends React.Component {
    state = {
        movies: [
            {
                "id": 1,
                "name": "The Batman",
                "rating": 8.3,
                "overview": "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                "imgURL": "https://cdn.kayiprihtim.com/wp-content/uploads/2018/11/batman-begins-kapak.jpg"
            },
            {
                "id": 2,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                "imgURL": "https://tr.web.img2.acsta.net/pictures/14/10/09/15/52/150664.jpg"
            },
            {
                "id": 3,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                "imgURL": "https://dizitanitim.files.wordpress.com/2014/12/wpid-wp-1417891985968.jpeg"
            },
            {
                "id": 4,
                "name": "PK",
                "rating": 7.9,
                "overview": "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                "imgURL": "https://www.intersinema.com/film/resimler/11/11655_a_1100.jpg"
            }, {
                "id": 5,
                "name": "Kolpaçino",
                "rating": 6.8,
                "overview": "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                "imgURL": "https://upload.wikimedia.org/wikipedia/tr/9/9f/Kolpa%C3%A7ino.jpg"
            }, {
                "id": 6,
                "name": "Recep İvedik 4 ",
                "rating": 6.8,
                "overview": "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                "imgURL": "http://i.imgur.com/T9AMP4o.jpg"
            }
        ],
        searchQuery: ""
    }

    deleteMovie = (movie) => {
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