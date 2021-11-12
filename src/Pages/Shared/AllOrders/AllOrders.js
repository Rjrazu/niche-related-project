import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const AllOrders = () => {
    const [packs, setPacks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/prod')
            .then(res => res.json())
            .then(data => setPacks(data))
    }, [])
    const handleRemove = (id) => {
        const procced = window.confirm('Are You Sure To Remove The Package?');
        if (procced) {
            fetch(`http://localhost:5000/prod/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainPack = packs.filter(pack => pack._id !== id);
                        setPacks(remainPack)
                    } else {
                        alert('Something Went Wrong')
                    }
                });
        }
    }
    const handleApproved = (id) => {
        const procced = window.confirm('Are You Sure To Approved The Package?');
        if (procced) {
            fetch(`http://localhost:5000/prod/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Approved Successfully')
                        const remainPack = packs.filter(pack => pack._id !== id);
                        setPacks(remainPack)
                    } else {
                        alert('Something Went Wrong')
                    }
                });
        }
    }

    return (
        <div>
            {
                packs.map(pack => <div key={pack.key}>
                    <Col>
                        <Card className="mb-3">
                            <Card.Img variant="top" className=" img-fluid" src={pack.image} />
                            <Card.Body>
                                <Card.Title>{pack.model}</Card.Title>
                                <p>Cost : BDT {pack.price}</p>
                            </Card.Body>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-danger me-3" onClick={() => handleRemove(pack._id)} > Delete Request</button>
                                <button className="btn btn-success" onClick={() => handleApproved(pack._id)} > Approve Now</button>
                            </div>
                        </Card>
                    </Col>

                </div>)
            }
        </div>
    );
};


export default AllOrders;