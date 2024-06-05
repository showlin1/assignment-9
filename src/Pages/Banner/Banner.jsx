

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/7nh9m7g/office-interior-design.jpg" className="w-full h-3/4 rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/p00j8Bx/commercial-building.jpg" className="w-full h-3/4 rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/W05wKW8/office-building-Exterior.jpg" className="w-full h-3/4 rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/x2yhGqh/appartment1.png" className="w-full h-3/4 rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            
            <div id="slide5" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/cwPyxsm/Office-buildings.jpg" className="w-full h-3/4 rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;