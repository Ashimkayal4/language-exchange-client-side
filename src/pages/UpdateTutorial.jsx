import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTutorial = () => {

    const data = useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const language = form.language.value;
        const price = form.price.value;
        const description = form.description.value;

        const updateTutorial = { image, language, price, description };
        console.log(updateTutorial)

        fetch(`http://localhost:5000/tutorials/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTutorial)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'tutorial updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    return (
        <div className="card">
            <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" defaultValue={data.name} className="input input-bordered" required readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" defaultValue={data.email} className="input input-bordered" required readOnly/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="image" name='image' defaultValue={data.image} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Language</span>
                    </label>
                    <input type="text" placeholder="language" name='language' defaultValue={data.language} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="price" name='price' defaultValue={data.price} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="description" name='description' defaultValue={data.description} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <input type="text" placeholder="review" defaultValue={data.review} readOnly className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTutorial;