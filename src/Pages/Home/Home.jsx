import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Estate from "../Estate/Estate";
import DynamicTitle from "../DynamicTitle/DynamicTitle";

const Home = () => {
    const commercial = useLoaderData();
    // console.log(commercial);
    return (
        <div className="mt-10">
            <div>
                <DynamicTitle></DynamicTitle>
            </div>
            <div className="h-[700px] mt-14">
                <Banner></Banner>
            </div>
            <p className="text-center text-5xl mt-6">Commercial Properties</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 mb-20">
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