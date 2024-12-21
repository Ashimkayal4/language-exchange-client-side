import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center my-5'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className='flex justify-center mt-2'>
                    <h1 className='text-2xl btn'> <FaGoogle></FaGoogle> Google Login</h1>
                </div>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
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