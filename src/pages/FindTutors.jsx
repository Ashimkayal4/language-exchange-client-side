import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FindTutorCard from "../components/FindTutorCard";
import { AuthContext } from "../provider/AuthProvider";

const FindTutors = () => {
    const tutorials = useLoaderData();
    const [selectedLanguage, setSelectedLanguage] = useState("all");


    const allLanguages = [
        "English", "Spanish", "French", "German", "Chinese", "Korean", "Japanese", "Italian", "Russian"
    ];

    // Filter tutorials based on selected language
    const filteredTutorials = selectedLanguage === "all"
        ? tutorials
        : tutorials.filter(tutorial =>
            tutorial.language === selectedLanguage
        );

    // Handle change in dropdown selection
    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const { isDarkMode } = useContext(AuthContext);

    return (
        <div className={`container p-10 mx-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'}`}>
           
            <div className="mb-4 text-center">
                <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="select text-black select-bordered w-full sm:w-1/2 md:w-1/3 mx-auto"
                >
                    <option value="all">All Languages</option>
                    {allLanguages.map((language) => (
                        <option key={language} value={language}>
                            {language}
                        </option>
                    ))}
                </select>
            </div>

            {/* Display tutor cards in a responsive grid */}
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
                        {selectedLanguage === "all" ? "No tutors found." : `No tutors found for ${selectedLanguage}.`}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FindTutors;
