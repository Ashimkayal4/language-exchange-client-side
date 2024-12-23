import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FindTutorCard from "../components/FindTutorCard";

const FindTutors = () => {
    const tutorials = useLoaderData(); 
    const [search, setSearch] = useState("");

    // Filter tutorials based on the search input (case-insensitive)
    const filteredTutorials = tutorials.filter(tutorial =>
        tutorial.language.toLowerCase().includes(search.toLowerCase())
    );

    // Handle change in search input
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="container mx-auto my-8">
            {/* Search Field */}
            <div className="mb-4 text-center">
                <input
                    type="text"
                    placeholder="Search by language..."
                    value={search}
                    onChange={handleSearchChange}
                    className="input input-bordered w-full sm:w-1/2 md:w-1/3 mx-auto"
                />
            </div>

            {/* Display tutor cards in a responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredTutorials.length > 0 ? (
                    filteredTutorials.map(tutorial => (
                        <FindTutorCard
                            key={tutorial._id}
                            tutorial={tutorial} 
                        />
                    ))
                ) : (
                    <p className="text-xl text-center col-span-full">No tutors found for the selected language.</p>
                )}
            </div>
        </div>
    );
};

export default FindTutors;
