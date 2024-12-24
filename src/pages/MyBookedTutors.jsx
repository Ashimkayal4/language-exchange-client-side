import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyBookedTutors = () => {
    const { user ,isDarkMode} = useContext(AuthContext);
    const [bookTutor, setBookTutor] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-bookedTutor?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookTutor(data))
            .catch(err => console.error('Error fetching booked tutors:', err));
    }, [user.email]);

    
    return (
        <div className={`p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'}`}>
            <h1 className="text-3xl font-bold text-center mb-6">My Booked Tutors</h1>
            <p className="text-center mb-8">
                You have booked <span className="font-semibold">{bookTutor.length}</span> tutors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookTutor.map((tutor) => (
                    <div
                        key={tutor._id}
                        className="relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                        <img
                            src={tutor.image}
                            alt='tutor'
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{tutor.language}</h2>
                            <p className="text-gray-600 mb-1">Name: {tutor.name}</p>
                            <p className="text-gray-800 font-bold">Price: ${tutor.price}</p>
                            <button className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600">
                                Review
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookedTutors;
