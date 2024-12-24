import { IoIosArrowForward } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa"; // Example of a teaching-related icon
import { Link } from "react-router-dom";

const CategoryCard = ({ name }) => {
    return (
        <Link to={`find-tutors/${name.title}`}>
            <div className="flex items-center justify-between border gap-5 p-4 rounded-md hover:shadow-lg transition-shadow duration-300">
              
                <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                    <FaChalkboardTeacher className="text-2xl text-blue-600" />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">{name.title}</h1>
                    <p>6000 teachers</p>
                </div>
                <div className="text-3xl font-bold">
                    <IoIosArrowForward />
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;
