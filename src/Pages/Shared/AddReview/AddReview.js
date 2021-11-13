import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddReview.css'
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/review/add', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-review">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} value={user?.displayName} />
                <input {...register("rate")} placeholder="Rate" min="0" max="5" type="number" />
                <textarea {...register("description")} placeholder="Description" />
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;