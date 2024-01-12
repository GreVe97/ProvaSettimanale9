import React, { Component } from 'react'
import { Container, Spinner, Alert, } from 'react-bootstrap'
import { urlApi } from '../dati/api';
import scrolla from './scrolla';

export default class Galleria extends Component {

    state = {
        movies: [],
        isLoading: false,
        errMsg: false,
        sagaContratta: this.props.saga.replace(/[^a-zA-Z]/g, '')
    }

    componentDidMount() {
        console.log("componentDidMount Galleria");
        console.log(this.props.saga);
        this.setState({
            isLoading: true
        });
        fetch(urlApi + this.props.saga)
            .then(response => response.json())
            .then(json => {
                console.log(json.Search);
                this.setState({
                    movies: json.Search.filter(ele => (ele.Poster !== "N/A") && (ele.Type === "movie" || ele.Type === "series")),
                    isLoading: false
                }, () => {
                    console.log(this.state.movies)
                });
            })
            .catch(error => {
                console.error(error);
                this.setState({
                    isLoading: false,
                    errMsg: true
                });
            });
    }

    render() {
        console.log("render galleria");
        return (
            <Container>
                <div className="grigliaFilm my-4">
                    <h3 className="h4">{this.props.saga}</h3>
                    <div id={this.state.sagaContratta} className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex">
                                {this.state.isLoading && <Spinner className='mx-auto' animation="border" />}
                                {this.state.errMsg &&
                                    <Alert className='mx-auto' variant="warning">
                                        Si è verificato un errore nel caricamento dei dati
                                    </Alert>
                                }
                                {this.state.movies.map(film => <a href="#" key={film.imdbID}><img src={film.Poster} alt={film.Title} /></a>)}
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={"#" + this.state.sagaContratta}
                            data-bs-slide="prev" onClick={() => scrolla(-1, this.state.sagaContratta)}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={"#" + this.state.sagaContratta}
                            data-bs-slide="next" onClick={() => scrolla(1, this.state.sagaContratta)}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </Container>
        )
    }
}














