

const Estate = ({commercial}) => {
    
    return (
        <div>
            <div className="p-6  border-2 h-[900px] card card-compact w-96 bg-base-100 shadow-xl">
                <figure className="rounded-lg"><img src={commercial.image} /></figure>
                <div className="card-body">
                    <h2 className="card-title mb-2 ">{commercial.estate_title}</h2>
                    <p className="mb-2 text-xl"><span className="font-bold">Id: </span> {commercial.id}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Segment_name: </span> {commercial.segment_name}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Description: </span>{commercial.description}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">price: </span> {commercial.price}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Status: </span> {commercial.status}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Area: </span> {commercial.area}</p>
                    <p className="mb-2 text-xl"><span className="font-bold">Location: </span>{commercial.location}</p>
                    <div>
                        <ul className="flex gap-3">
                            <li className="mb-2 text-xl"><span className="font-bold">Facilities:</span> {commercial.facilities[0]}</li>
                            <li className="mb-2 text-xl">{commercial.facilities[1]}</li>
                            <li className="mb-2 text-xl">{commercial.facilities[2]}</li>
                        </ul>
                    </div>

                    <div>
                        <button className="btn btn-primary">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;