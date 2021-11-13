import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AddedProducts = ({ product }) => {
    const { model, image, price } = product;

    // Delete Pack
    const handleDelete = (id) => {
        const procced = window.confirm('Are You Sure To Remove The Package?');
        if (procced) {
            fetch(`https://warm-crag-33369.herokuapp.com/product/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                    } else {
                        alert('Something Went Wrong')
                    }
                });
        }
    }

    const bg = [
        'bg-secondary',
        'bg-success',
        'bg-info',
        'bg-primary'
    ];
    const randomBG = bg[Math.floor(Math.random() * 4)];
    return (
        <div className="pointer-cursor">
            <Col className="text-white">
                <Card className={`${randomBG}`}>
                    <Card.Img variant="top" className="" style={{ maxWidth: '480px', height: '250px' }} src={image} />
                    <Card.Body>
                        <Card.Title>{model}</Card.Title>
                        <p>Price : BDT {price}</p>
                    </Card.Body>
                    <div className="d-flex justify-content-center">
                        <NavLink
                            to="/paynow"
                        >
                            <button className="btn btn-warning me-3"> Pay Now</button>
                        </NavLink>
                        <button className="btn btn-danger" onClick={() => handleDelete(model)}> Cancel</button>
                    </div>

                </Card>
            </Col>
        </div>
    );
};
export default AddedProducts;