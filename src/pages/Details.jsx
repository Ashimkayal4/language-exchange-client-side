import { useContext } from "react";
import { FaDollarSign, FaGraduationCap, FaStar } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
    const { user, isDarkMode } = useContext(AuthContext);
    const data = useLoaderData();
    const { id } = useParams();
    const tutorial = data.find(service => service._id === id);

    const navigate = useNavigate();

    const handleAddTutor = () => {
        const { _id, image, language, price, email: tutorEmail, name } = tutorial;
        const bookTutor = { id: _id, image, language, price, tutorEmail, email: user.email, name };

        fetch('http://localhost:5000/bookTutor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookTutor),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Tutor added successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/my-booked-tutors');
                }
            });
    };

    return (
        <div className={`border p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'}`}>
            {/* Image Section */}
            <div className="md:w-1/4 flex justify-center">
                <img
                    src={tutorial.image}
                    alt={tutorial.name}
                    className="h-48 w-48 rounded-full object-cover shadow-md hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 space-y-4">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    {tutorial.name} <IoCheckmarkCircle />
                </h1>
                <span className="px-4 py-1 text-sm text-pink-800 bg-pink-100 rounded-full font-semibold">
                    Super Teacher
                </span>
                <p className="text-lg flex items-center gap-2">
                    <FaGraduationCap /> {tutorial.language}
                </p>
                <p>{tutorial.description}</p>
            </div>

            {/* Review & Action Section */}
            <div className="md:w-1/4 space-y-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="flex items-center gap-2 text-yellow-500 text-lg font-semibold">
                            <FaStar /> {tutorial.review}
                        </p>
                        <p className="text-sm text-gray-500">57 reviews</p>
                    </div>
                    <div>
                        <p className="flex items-center gap-2 text-green-600 text-lg font-semibold">
                            <FaDollarSign /> {tutorial.price}
                        </p>
                        <p className="text-sm text-gray-500">50-min lessons</p>
                    </div>
                </div>
                <button
                    onClick={handleAddTutor}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold shadow-md">
                    Book Tutor
                </button>
            </div>
        </div>
    );
};

export default Details;
