

import { Component } from "react";

export default class Footer extends Component {


    render() {

        return (
            <>

                <div className="footer">
                    <div className="row gx-5 container py-5 m-auto">
                        <div className="col-md-6">
                            <div className="box mb-5 mb-md-0 text-center text-light">
                                <h2 className="mb-3">AROUND THE WEB</h2>
                                <ul className="list-unstyled mb-0 d-flex justify-content-evenly w-100 p-3">
                                    <li><a className="text-light" target="_blank" href="https://www.linkedin.com/in/mostafahmi/"><i className="fa-brands fa-linkedin fa-2x"></i></a></li>
                                    <li><a className="text-light" target="_blank" href="https://github.com/MostaFahmi"><i className="fa-brands fa-github fa-2x"></i></a></li>
                                    <li><a className="text-light" target="_blank" href="https://www.facebook.com/mostafaateff"><i className="fa-brands fa-facebook fa-2x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box mb-5 mb-md-0 text-light">
                                <h2 className="mb-3">CONTACT ME</h2>
                                <h5 className="mb-3" >Phone <span className="ms-3 fw-light">+20 112 208 6134</span></h5>
                                <h5 className="mb-3" >Email <span className="ms-3 fw-light">atef762@gmail.com</span></h5>
                                <h5 className="mb-3" >Address <span className="ms-3 fw-light">Madinaty, New Cairo, Cairo, Egypt</span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="copyRight bg-dark p-3 m-0">
                        <p className="text-white text-center m-0 p-0">Copyright © Your Website 2023</p>
                    </div>
                </div>
            </>
        )

    }
}