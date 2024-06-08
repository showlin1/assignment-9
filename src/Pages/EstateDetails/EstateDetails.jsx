import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import DynamicTitle from "../DynamicTitle/DynamicTitle";


const EstateDetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);
    console.log(estate);
    return (
        <div>
            <div className="mt-10">
                <DynamicTitle></DynamicTitle>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mb-14 mt-10">
                <div>
                    <img src={estate.image} className="rounded-xl w-[700px] h-[400px]" />
                </div>
                <div>
                    <h2 className="card-title mb-2 ">{estate.estate_title}</h2>
                    <p className="mb-2 text-xl"><span className="font-bold">Segment_name: </span> {estate.segment_name}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Description: </span>{estate.description}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">price: </span> {estate.price}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Status: </span> {estate.status}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Area: </span> {estate.area}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Location: </span>{estate.location}</p>
                    <ul className="flex gap-3">
                        <li className="mb-2 text-xl"><span className="font-bold">Facilities:</span> {estate.facilities[0]}</li>
                        <li className="mb-2 text-xl">{estate.facilities[1]}</li>
                        <li className="mb-2 text-xl">{estate.facilities[2]}</li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EstateDetails;