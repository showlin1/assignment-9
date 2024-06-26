import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const NotFound = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="mt-8">
                <h1 className="text-9xl text-center text-slate-400 font-bold mb-4">404</h1>
                <h2 className="text-5xl text-center font-bold mb-4"> Page Not Found</h2>
                <p className="text-center mb-4">Opps!, the page you looking for does not exist</p>
                <div className="text-center mb-4">
                    <Link to="/"><button className="bg-green-500 rounded-lg p-4">Back to Home</button></Link>
                </div>
            </div>
            <div className="mt-14">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default NotFound;