import { useContext } from "react";
import { FaDollarSign, FaGraduationCap, FaStar } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const { id } = useParams();
    const tutorial = data.find(service => service._id === id);

    const navigate=useNavigate()

    const handleAddTutor = () => {
        const id = tutorial._id;
        const image = tutorial.image;
        const language = tutorial.language;
        const price = tutorial.price;
        const tutorEmail = tutorial.email;
        const email = user.email;
        const name = tutorial.name;
        const bookTutor = { id, image, language, price, tutorEmail, email ,name };
        console.log(bookTutor);

        fetch('http://localhost:5000/bookTutor', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookTutor)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "tutor added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    navigate('/find-tutors')
                }
            })
    }

    return (
        <div className="flex gap-5 border p-4 rounded-md">
            <div className="w-[25%]">
                <img src={tutorial.image} className="h-36 w-36 rounded-md" alt="" />
            </div>
            <div className="w-[40%] space-y-2">
                <h1 className="flex gap-2 items-center">{tutorial.name} <IoCheckmarkCircle /></h1>
                <h1 className="border w-28 rounded-md bg-pink-100 font-semibold p-1">Super teacher</h1>
                <h1 className="flex gap-2 items-center"><FaGraduationCap /> {tutorial.language}</h1>
                <h1>{tutorial.description}</h1>
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
                    <button onClick={handleAddTutor} className="btn">Book tutor</button>
                </div>
            </div>
        </div>
    );
};

export default Details;