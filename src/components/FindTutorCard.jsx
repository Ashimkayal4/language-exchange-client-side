import { Link } from "react-router-dom";

const FindTutorCard = ({tutorial}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={tutorial.image}
                    className="h-60"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                {tutorial.name}
                <h2 className="card-title">
                    <h1>Language : { tutorial.language}</h1>
                </h2>
                <h1>Review : { tutorial.review}</h1>
                <div className="card-actions justify-end">
                    <Link to={`/details/${tutorial._id}`}>
                     <button className="btn btn-outline">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FindTutorCard;