import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import AddedProducts from '../AddedProducts/AddedProducts';

const MyOrders = () => {
    const { user } = useAuth()
    const { uid } = user;

    const [products, SetProduct] = useState([]);

    useEffect(() => {
        fetch(`https://warm-crag-33369.herokuapp.com/product/${uid} `)
            .then(res => res.json())
            .then(data => SetProduct(data))
    }, [uid])


    return (
        <div className="container mb-5">
            <h3 className="text-center mb-4">My Added Packages</h3>
            <Row xs={1} md={2} lg={2} className="g-4">
                {
                    products.map(product => <AddedProducts
                        key={product._id}
                        product={product}
                    ></AddedProducts>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;