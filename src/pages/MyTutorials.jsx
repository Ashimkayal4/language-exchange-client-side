import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyTutorials = () => {
    const { user } = useContext(AuthContext)
    const [tutorial, setTutorial] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-tutorials?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setTutorial(data)
            })
    },[user.email])
    return (
        <div>
            my tutorials :{tutorial.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            tutorial.map(item => <>
                                <tr key={item._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
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
                                                <div className="font-bold">{ item.language}</div>
                                                <div className="text-sm opacity-50">{ item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.description}
                                        <br />
                                        <span className="badge badge-ghost badge-sm"> $ { item.price}</span>
                                    </td>
                                    <td>{ item.review}</td>
                                    <th className='flex gap-2'>
                                        <Link to={`/update-tutorial/${item._id}`}><button className="btn">Update</button></Link>
                                        <button className="btn">Delete</button>
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