import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyBookedTutors = () => {
    const { user } = useContext(AuthContext)
    const [bookTutor, setBookTutor] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/my-bookedTutor?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setBookTutor(data)
            })
    }, [user.email])
    return (
        <div>
            my book tutors : {bookTutor.length}

            <div className='grid grid-cols-3 gap-3'>
                {
                    bookTutor.map(tutor => <div
                        key={tutor._id}
                    >
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={tutor.image}
                                    className='h-64'
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{tutor.language }</h2>
                                <p>{tutor.name}</p>
                                <p> $ { tutor.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Review</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyBookedTutors;