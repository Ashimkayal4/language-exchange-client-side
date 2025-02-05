import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { signInUser, setUser, googleLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
      
        signInUser(email, password)
            .then(res => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                setUser(res.user)

                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err)
        })
    }


    const handleGoogle = () => {
        googleLogin()
            .then(res => {
                setUser(res.user)
                console.log(res)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "login successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/')
        })
    }
    return (
        <div className='flex justify-center my-5'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className='flex justify-center mt-2'>
                    <button onClick={handleGoogle} className='text-2xl btn'> <FcGoogle></FcGoogle> Google Login</button>
                </div>
                
                <form onSubmit={handleSignIn} className="card-body">
                    <h1 className='flex justify-center font-semibold'>or</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
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