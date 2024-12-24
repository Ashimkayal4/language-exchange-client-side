import { useLoaderData, useParams, Link } from "react-router-dom";

const FindTutorCategory = () => {
    const tutors = useLoaderData();
    const { language } = useParams();

    // Filter tutors based on the selected language
    const filteredTutors = tutors.filter(tutor => tutor.language === language);

    return (
        <div className="container mx-auto my-12 px-4">
            <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-10">
                Tutors for {language}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTutors.length > 0 ? (
                    filteredTutors.map(tutor => (
                        <div
                            key={tutor._id}
                            className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden"
                        >
                            <div className="relative">
                                <img
                                    src={tutor.image}
                                    alt={tutor.name}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    {tutor.language}
                                </div>
                                <div className="absolute bottom-2 right-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    ⭐ {tutor.review}
                                </div>
                            </div>

                           
                            <div className="p-4 space-y-2">
                                <h2 className="text-lg font-bold text-gray-800">
                                    {tutor.name}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    Explore {language} with {tutor.name}, a skilled tutor!
                                </p>
                                <div className="flex justify-between items-center mt-4">
                                    <Link to={`/details/${tutor._id}`}>
                                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition duration-300">
                                            View Details
                                        </button>
                                    </Link>
                                    <p className="text-lg font-bold text-green-600">
                                        ${tutor.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-xl text-gray-700 text-center col-span-full">
                        No tutors found for the selected language.
                    </p>
                )}
            </div>
        </div>
    );
};

export default FindTutorCategory;
