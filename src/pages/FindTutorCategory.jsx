import { useLoaderData, useParams, Link } from "react-router-dom";

const FindTutorCategory = () => {
    const tutors = useLoaderData(); // Load tutors data from the loader
    const { language } = useParams(); // Get the language from the URL params

    // Filter tutors based on the selected language
    const filteredTutors = tutors.filter(tutor => tutor.language === language);

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold text-center mb-8">
                Tutors for {language}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutors.length > 0 ? (
                    filteredTutors.map(tutor => (
                        <div key={tutor._id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={tutor.image}
                                    className="h-60"
                                    alt={tutor.name} // Added alt text for accessibility
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {tutor.name}
                                    <h1>Language: {tutor.language}</h1>
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <h1>Review: {tutor.review}</h1>
                                <div className="card-actions justify-end">
                                    <Link to={`/details/${tutor._id}`}>
                                        <button className="btn btn-outline">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-xl text-center col-span-full">
                        No tutors found for the selected language.
                    </p>
                )}
            </div>
        </div>
    );
};

export default FindTutorCategory;

