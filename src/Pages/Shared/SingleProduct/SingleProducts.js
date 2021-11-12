import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleProducts = ({ product }) => {
    const { _id, model, controlType, color, description, material, price, image } = product;
    const history = useHistory();

    const handleCard = () => {
        history.push(`/booking/${_id}`)
    }
    const bg = [
        'bg-secondary',
        'bg-success',
        'bg-info',
        'bg-warning',
        'bg-primary'
    ];
    const randomBG = bg[Math.floor(Math.random() * 5)];
    return (
        <div className="pointer-cursor">
            <Col className="text-white">
                <Card className={`${randomBG}`}>
                    <Card.Img variant="top" className="" style={{ maxWidth: '480px', height: '250px' }} src={image} />
                    <Card.Body>
                        <Card.Title>{model}</Card.Title>
                        <p>{description.slice(0, 90)}</p>
                        <Card.Title> <span className="text-danger"><i className="fas fa-angle-double-right"></i></span> Cost : BDT {price}</Card.Title>
                        <p>{controlType}</p>
                        <p>{color}</p>
                        <p>{material}</p>
                    </Card.Body>
                    <button className="btn btn-danger" onClick={handleCard}> Purchase Now</button>
                </Card>
            </Col>
        </div>
    );
};

export default SingleProducts;