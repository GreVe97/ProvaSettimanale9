import React from 'react'
import scrolla from './scrolla';



function Galleria() {

  return (
    <div className="grigliaFilm my-4">
    <h3 className="h4">Trending now</h3>
    <div id="carosello1" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active d-flex">
                <a href="#"><img src="assets/media/media0.webp"/></a>
                <a href="#"><img src="assets/media/media1.jpg"/></a>
                <a href="#"><img src="assets/media/media2.webp"/></a>
                <a href="#"><img src="assets/media/media3.webp"/></a>
                <a href="#"><img src="assets/media/media4.jpg"/></a>
                <a href="#"><img src="assets/media/media5.webp"/></a>
                <a href="#"><img src="assets/media/media6.jpg"/></a>
                <a href="#"><img src="assets/media/media7.webp"/></a>
                <a href="#"><img src="assets/media/media9.jpg"/></a>
                <a href="#"><img src="assets/media/media10.jpg"/></a>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carosello1"
            data-bs-slide="prev" onClick={() => scrolla(-1, 1)}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carosello1"
            data-bs-slide="next" onClick={() => scrolla(1, 1)}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>    
  )
}

export default Galleria