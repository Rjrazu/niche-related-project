import React from 'react';

const Contact = () => {
    return (
        <div className="container border mt-4 mb-5">
            <div className="bg-light m-5">
                <h2 className="text-dark  p-2 text-center mb-3">Contact Us</h2>


                <form>
                    <div className="row pt-3 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                required
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                name="email"
                                required
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                required
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea
                                className="form-control"
                                id=""
                                cols="30"
                                rows="8"
                                placeholder="Your message"
                                name="message"
                                minLength="25"
                                required
                            ></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input
                                type="submit"
                                className="btn btn-primary"
                                value="Send Message"
                            ></input>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Contact;