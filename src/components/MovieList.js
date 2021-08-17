import React from 'react';

class MovieList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://tr.web.img2.acsta.net/pictures/14/10/09/15/52/150664.jpg" className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">Sample Movie</h5>
                            <p className="card-text">Sample Movie Description</p>
                            <div className="d-flex justify-content-between align-item-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h2>
                                    <span className="badge badge-info">9.0</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://tr.web.img2.acsta.net/r_1280_720/medias/nmedia/18/35/23/40/18431141.jpg" className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">Sample Movie</h5>
                            <p className="card-text">Sample Movie Description</p>
                            <div className="d-flex justify-content-between align-item-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h2>
                                    <span className="badge badge-info">9.0</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://tr.web.img4.acsta.net/medias/nmedia/18/85/31/56/20125440.jpg" className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">Sample Movie</h5>
                            <p className="card-text">Sample Movie Description</p>
                            <div className="d-flex justify-content-between align-item-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h2>
                                    <span className="badge badge-info">9.0</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieList 