import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends React.Component {
    state = {
        movies: [
            {
                "id": 1,
                "name": "The Flash",
                "rating": 8.3,
                "overview": "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                "imgURL": "https://l24.im/5KM4WOd"
            },
            {
                "id": 2,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                "imgURL": "https://l24.im/C3JS"
            },
            {
                "id": 3,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "Some quick example text to build on the card title and make up the bulk of the card's content. ",
                "imgURL": "https://l24.im/hVwuf2"
            }
        ]
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar />
                    </div>
                </div>
                <MovieList />
            </div>
        )
    }
}

export default App