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
        },[user.email])
    return (
        <div>
            my book tutors : {bookTutor.length}

            <div>
                {bookTutor.map(tutor => <div
                key={tutor._id}
                >
                
                    <h1>{tutor.email}</h1>
                
                
                </div>)}
            </div>
        </div>
    );
};

export default MyBookedTutors;