// import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const CategoryCard = ({ name }) => {
    // const [item, setItem] = useState()

    return (
        <Link to={`find-tutors/${name.title}`}>

            <div className="flex items-center justify-between border gap-5 p-4 rounded-md">
                <div>logo</div>
                <div>
                    <h1>{name.title}</h1>
                    <p>6000 +</p>
                </div>
                <div>
                    <IoIosArrowForward />
                </div>
            </div>

        </Link>
    );
};

export default CategoryCard;