import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyTutorials = () => {
    const { user, isDarkMode } = useContext(AuthContext)
    const [tutorial, setTutorial] = useState([]);


    const axiosSecure = useAxiosSecure()

    useEffect(() => {

        axiosSecure.get(`/my-tutorials?email=${user.email}`)
            .then(res => setTutorial(res.data))
        
    }, [user.email])


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/tutorials/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            fetch(`http://localhost:5000/my-tutorials?email=${user.email}`)
                                .then(res => res.json())
                                .then(data => {
                                    setTutorial(data)
                                })
                        }
                    })

            }
        });
    }
    return (
        <div className={`pt-5 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'}`}>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {
                            tutorial.map(item => <>
                                <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.language}</div>
                                                <div className="text-sm opacity-50">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.description}
                                        <br />
                                        <span className="badge badge-ghost badge-sm"> $ {item.price}</span>
                                    </td>
                                    <td>{item.review}</td>
                                    <th className='flex gap-2'>
                                        <Link to={`/update-tutorial/${item._id}`}><button className="btn">Update</button></Link>
                                        <button onClick={() => handleDelete(item._id)} className="btn">Delete</button>
                                    </th>
                                </tr>

                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTutorials;