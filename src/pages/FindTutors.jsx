import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FindTutorCard from "../components/FindTutorCard";
import { AuthContext } from "../provider/AuthProvider";

const FindTutors = () => {
    const tutorials = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    const { isDarkMode } = useContext(AuthContext);

    // Filter tutorials based on search input
    const filteredTutorials = tutorials.filter(tutorial =>
        tutorial.language.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`container p-10 mx-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'}`}>
         
            <div className="mb-6 text-center">
                <input
                    type="text"
                    placeholder="Search by language..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input input-bordered text-black w-full sm:w-1/2 md:w-1/3 mx-auto"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTutorials.length > 0 ? (
                    filteredTutorials.map((tutorial) => (
                        <FindTutorCard
                            key={tutorial._id}
                            tutorial={tutorial}
                        />
                    ))
                ) : (
                    <p className="text-xl text-center col-span-full">
                        {searchQuery ? `No tutors found for "${searchQuery}".` : "No tutors found."}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FindTutors;
