import { Component } from 'react';


export default class Courses extends Component {

    render() {


        return (
            <>

                <div className="courses bg-main min-vh-custom py-5 d-flex align-items-center justify-content-center">
                    <div className="container">
                        <h2 className='text-white m-auto w-fit px-3 pb-4 border-bottom border-5 position-relative fw-bolder mb-5 text-uppercase'>
                            Courses & Certificates
                        </h2>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="coursesDetails">
                                    <div className="inner d-flex justify-content-between align-items-center text-white bg-opacity-25 bg-white rounded p-2 mb-4">
                                        <h5 className='m-0 fw-bold w-100'>
                                            Data Analyst with SQL, <span className='fw-light'>Data Camp</span>
                                        </h5>
                                        <p className='text-nowrap m-0'>Dec 2023</p>
                                    </div>
                                    <div className="inner d-flex justify-content-between align-items-center text-white bg-opacity-25 bg-white rounded p-2 mb-4">
                                        <h5 className='m-0 fw-bold w-100'>
                                            Data Analyst with Power BI, <span className='fw-light'>Data Camp</span>
                                        </h5>
                                        <p className='text-nowrap m-0'>Oct 2023</p>
                                    </div>

                                    <div className="inner d-flex justify-content-between align-items-center text-white bg-opacity-25 bg-white rounded p-2 mb-4">
                                        <h5 className='m-0 fw-bold w-100'>
                                            Data Analysis From The Business Perspective, <span className='fw-light'>Career 180</span>
                                        </h5>
                                        <p className='text-nowrap m-0'>Aug 2023</p>
                                    </div>

                                    <div className="inner d-flex justify-content-between align-items-center text-white bg-opacity-25 bg-white rounded p-2 mb-4">
                                        <h5 className='m-0 fw-bold w-100'>
                                            Data Analyst with Python, <span className='fw-light'>Data Camp</span>
                                        </h5>
                                        <p className='text-nowrap m-0'>July 2023</p>
                                    </div>

                                    <div className="inner d-flex justify-content-between align-items-center text-white bg-opacity-25 bg-white rounded p-2 mb-4">
                                        <h5 className='m-0 fw-bold w-100'>
                                            Google Data Analytics Professional Certificate, <span className='fw-light'>Coursera</span>
                                        </h5>
                                        <p className='text-nowrap m-0'>June 2023</p>
                                    </div>
                                    <div className="inner d-flex justify-content-between align-items-center text-white bg-opacity-25 bg-white rounded p-2 mb-4">
                                        <h5 className='m-0 fw-bold w-100'>
                                            Project Management Postgraduate Certificate,<span className='fw-light'>AUC</span>
                                        </h5>
                                        <p className='text-nowrap m-0'>Jan 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <div className="image w-100">
                                    <img className='w-100' src="./Images/course.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </>
        )
    }
}
