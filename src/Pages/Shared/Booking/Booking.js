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
        fetch(`https://warm-crag-33369.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);


    const handleOrder = (products) => {
        axios.post('https://warm-crag-33369.herokuapp.com/product/add', products)
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
                        <h4>Price : BDT {product.price} </h4>
                        <p>Type {product.controlType}</p>
                        <p>Color {product.color}</p>
                        <p>Material {product.material}</p>
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