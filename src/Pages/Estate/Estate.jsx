import { Link } from "react-router-dom";


const Estate = ({ commercial }) => {
const {image,estate_title,id,segment_name,description,price,status,area,location,facilities} =commercial;
    return (
        <div>
            <div className="p-6  border-2 h-[900px] card card-compact w-96 bg-base-100 shadow-xl">
                <figure className="rounded-lg"><img src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title mb-2 ">{estate_title}</h2>
                    <p className="mb-2 text-xl"><span className="font-bold">Id: </span> {id}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Segment_name: </span> {segment_name}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Description: </span>{description}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">price: </span> {price}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Status: </span> {status}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Area: </span> {area}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Location: </span>{location}</p>
                    <div>
                        <ul className="flex gap-3">
                            <li className="mb-2 text-xl"><span className="font-bold">Facilities:</span> {facilities[0]}</li>
                            <li className="mb-2 text-xl">{facilities[1]}</li>
                            <li className="mb-2 text-xl">{facilities[2]}</li>
                        </ul>
                    </div>

                    <div>
                        <Link to={`/estate/${id}`}>
                            <button className="btn btn-primary">View Property</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;