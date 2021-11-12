import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth()
    const { uid } = user;
    const { id } = useParams();
    const [product, setProduct] = useState({})

    let newProduct = { ...product, uid }
    delete newProduct._id

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);


    const handleOrder = (products) => {
        axios.post('http://localhost:5000/product/add', products)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                }
            })
    }

    return (
        <div className="container mt-5 mb-5 p-3 shadow">
            <Container>

                <Row>
                    <Col lg={8}>
                        <img src={product.image} className="img-fluid rounded-3" alt="" /> <br />
                        <h2>{product.model}</h2>
                        <h4>Total Cost : BDT {product.price} </h4>
                        <h5>{product.color}</h5>
                        <h6>{product.description}</h6>
                    </Col>
                    <Col className="text-center" lg={4}>
                        <h2>Booking</h2>
                        <div className="add-service">
                            <button className="btn btn-success" onClick={() => handleOrder(newProduct)}>Order Now</button>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Booking;