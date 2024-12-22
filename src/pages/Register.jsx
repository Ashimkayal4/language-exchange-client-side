import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { createUser, setUser, googleLogin } = useContext(AuthContext);

    const handleCreateSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                setUser(res.user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Registration successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
            console.log(err)
        })
    }

        const handleGoogle = () => {
            googleLogin()
                .then(res => {
                    setUser(res.user)
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "login successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
            })
        }
    return (
        <div className='flex justify-center my-5'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className='flex justify-center mt-2'>
                    <button onClick={handleGoogle} className='text-2xl btn'> <FcGoogle></FcGoogle> Google Login</button>
                </div>
                <form onSubmit={handleCreateSubmit} className="card-body">
                    <h1 className='flex justify-center font-semibold'>or</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div>
                        <h1 className='flex gap-2'>Already have an account ? <Link to="/login"><p className='text-red-600'>Login</p></Link> </h1>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;