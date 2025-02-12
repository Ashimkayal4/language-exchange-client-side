import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddTutorials = () => {
    const { user, isDarkMode } = useContext(AuthContext)

    const userEmail = user?.email
    const userName = user?.displayName


    const handleAddTutorial = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = userEmail;
        const image = form.image.value;
        const language = form.language.value;
        const price = form.price.value;
        const description = form.description.value;
        const review = form.review.value;
        const newTutorial = { name, email, image, language, price, description, review }

        fetch('https://assignment-eleven-server-side-drab.vercel.app/tutorials', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTutorial)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "tutorial added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset()
            })
    }

    return (
        <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'}`} >
            <form onSubmit={handleAddTutorial} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name='name' defaultValue={userName} readOnly className="input input-bordered text-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" defaultValue={userEmail} readOnly className="input text-black input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="image" name='image' className="input text-black input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Language</span>
                    </label>
                    <input type="text" placeholder="language" name='language' className="input text-black input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="price" name='price' className="input text-black input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="description" name='description' className="input text-black input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <input type="text" placeholder="review" name='review' className="input text-black input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddTutorials;