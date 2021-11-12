import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products/add', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-product">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("key")} placeholder="key" />
                <input {...register("model")} placeholder="Model Name" />
                <input {...register("color")} placeholder="Color" />
                <input {...register("controlType")} placeholder="controlType : Remote / Gesture" />
                <input {...register("material")} placeholder="Build Material" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("image")} placeholder="Image-Tag" />
                <input {...register("price")} placeholder="Cost" />

                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};


export default AddProducts;