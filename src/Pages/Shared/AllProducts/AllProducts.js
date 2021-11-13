import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleProducts from '../SingleProduct/SingleProducts';

const AllProducts = () => {
    const [products, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://warm-crag-33369.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center mb-4">Our Products</h2>
            <Row xs={1} md={2} lg={4} className="g-4">

                {
                    products.map(product => <SingleProducts
                        key={product.key}
                        product={product}
                    ></SingleProducts>)
                }
            </Row>
        </div>

    );
};

export default AllProducts;