import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Estate from "../Estate/Estate";

const Home = () => {
    const commercial = useLoaderData();
    // console.log(commercial);
    return (
        <div className="mt-10">
            <div className="h-[700px]">
                <Banner></Banner>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-20">
                {
                    commercial.map(aCommercial => <Estate
                        key={aCommercial.id} commercial={aCommercial}
                    ></Estate>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;