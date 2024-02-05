import { Component } from 'react';


export default class Education extends Component {


    render() {

        return (
            <>

                <div className="education container-fluid bg-main min-vh-custom py-5 d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row g-5 flex">
                            <div className="col-lg-9">
                                <h2 className='text-white text-center px-3 pb-4 border-bottom border-5 position-relative fw-bolder mb-5 text-uppercase'>
                                    Education
                                </h2>
                                <div className="inner d-flex justify-content-between align-items-center text-white bg-opacity-25 bg-white rounded p-2 mb-4">
                                    <h5 className='m-0 fw-bold w-100'>
                                        Master of Science In Data Science, <span className='fw-light'>University of East London</span>
                                    </h5>
                                    <p className='text-nowrap m-0'>Feb 2023 – Dec 2025</p>
                                </div>
                                <div className="inner d-flex justify-content-between align-items-center text-white bg-opacity-25 bg-white rounded p-2 mb-4">
                                    <h5 className='m-0 fw-bold w-100'>
                                        Bachelor of Science In Civil Engineering, <span className='fw-light'>German University in Cairo</span>
                                    </h5>
                                    <p className='text-nowrap m-0'>Sep 2017 – July 2021</p>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <div className="image d-flex justify-content-center align-items-end h-100 w-100">
                                    <img className='w-100' src="./Images/edu.png" alt="data scince image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
