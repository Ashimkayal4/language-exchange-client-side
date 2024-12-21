import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center my-5'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className='flex justify-center mt-2'>
                    <h1 className='text-2xl btn'> <FaGoogle></FaGoogle> Google Login</h1>
                </div>
                <form className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <h1 className='flex gap-2'>Don't have any account ? <Link to="/register"><p className='text-red-600'>Register</p></Link> </h1>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;