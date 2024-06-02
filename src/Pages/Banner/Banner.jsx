

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/cwPyxsm/Office-buildings.jpg" className="w-full h-1/2" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Yf19h0C/retail-spaces.jpg" className="w-full h-1/2" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/qDn6drm/warehouses.jpg" className="w-full h-1/2" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/jHpm6GL/industrial.jpg" className="w-full h-1/2" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;