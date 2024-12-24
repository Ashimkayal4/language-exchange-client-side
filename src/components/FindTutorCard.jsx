import { Link } from "react-router-dom";

const FindTutorCard = ({ tutorial }) => {
    return (
        <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={tutorial.image}
                    alt={`Tutor for ${tutorial.language}`}
                    className="w-full h-56 object-cover"
                />
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {tutorial.language}
                </div>
                <div className="absolute bottom-2 right-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ⭐ {tutorial.review}
                </div>
            </div>

            {/* Card Body */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{tutorial.name}</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Looking to improve your {tutorial.language}? {tutorial.name} is here to guide you!
                </p>
                <div className="flex justify-between items-center">
                    <Link to={`/details/${tutorial._id}`}>
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition duration-300">
                            View Details
                        </button>
                    </Link>
                    <p className="text-lg font-bold text-green-600">${tutorial.price}</p>
                </div>
            </div>
        </div>
    );
};

export default FindTutorCard;
