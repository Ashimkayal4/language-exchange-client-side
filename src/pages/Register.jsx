import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { createUser, setUser, googleLogin,updatePro } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleCreateSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const valid = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;
        if (!valid.test(password)) {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Must one uppercase,one lowercase and 6 letter long",
                showConfirmButton: false,
                timer: 2500
            });
            return;
        }

        createUser(email, password)
            .then(res => {
                const newUser = res.user;
                updatePro({displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...newUser, displayName: name, photoURL: photo })
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Registration successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(location?.state ? location.state : '/')
                    })
                    .catch(err => {
                    console.log(err)
                })
            
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
                    navigate(location?.state ? location.state : '/')
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