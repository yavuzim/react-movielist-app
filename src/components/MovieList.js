import React from 'react';

const MovieList = (props) => {
    return (
        <div className="row">
            {props.movies.map((movie) => (
                <div className="col-lg-4" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imgURL} className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <div className="d-flex justify-content-between align-item-center">
                                <button type="button" className="btn btn-md btn-outline-danger" onClick={(event)=>props.deleteMovieProp(movie)}>Delete</button>
                                <h2>
                                    <span className="badge badge-primary" style={{ background: 'blue' }}>{movie.rating}</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieList