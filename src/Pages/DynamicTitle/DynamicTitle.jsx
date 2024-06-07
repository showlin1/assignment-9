import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const DynamicTitle = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-3 mb-4">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true}>
                <Link className="mr-12" >Premium Commercial Properties for Your Business Needs on Our Trusted Real Estate Site!</Link>
                <Link className="mr-12" >Premium Commercial Properties for Your Business Needs on Our Trusted Real Estate Site!</Link>
                <Link className="mr-12" >Premium Commercial Properties for Your Business Needs on Our Trusted Real Estate Site!</Link>
            </Marquee>
        </div>
    );
};

export default DynamicTitle;