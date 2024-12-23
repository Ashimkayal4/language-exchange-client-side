import { FaDollarSign, FaGraduationCap, FaStar } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const data = useLoaderData()
    const { id } = useParams();
    const tutorial = data.find(service => service._id === id);

    return (
        <div className="flex gap-5 border p-4 rounded-md">
          <div className="w-[25%]">
            <img src={tutorial.image} className="h-36 w-36 rounded-md" alt="" />
          </div>
            <div className="w-[40%] space-y-2">
                <h1 className="flex gap-2 items-center">{tutorial.name} <IoCheckmarkCircle /></h1>
                <h1 className="border w-28 rounded-md bg-pink-100 font-semibold p-1">Super teacher</h1>
                <h1 className="flex gap-2 items-center"><FaGraduationCap /> {tutorial.language}</h1>
                <h1>{ tutorial.description}</h1>
          </div>
            <div className="w-[35%]">
                <div className="flex gap-5">
                    <div>
                        <h1 className="flex items-center gap-2"><FaStar /> {tutorial.review}</h1>
                        <p>57 review</p>
                    </div>
                    <div>
                        <h1 className="flex items-center gap-2"><FaDollarSign />{tutorial.price}</h1>
                        <p>50-min-lessons</p>
                    </div>
                </div>
                
                <div className="mt-8">
                    <button className="btn">Book tutor</button>
                </div>
          </div>
        </div>
    );
};

export default Details;