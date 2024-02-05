
import { Component } from "react";


export default class Home extends Component {

    render() {
        return (
            <>
                <div className="home bg-main vh-custom d-flex flex-column justify-content-center align-items-center">
                    <div className="x w-custom h-custom bg-custom rounded-circle position-relative">
                        <img className="w-100" src={require('../../Images/profile.png')} alt="profile picture for Developer" />
                    </div>
                    <h2 className="text-light position-relative border-bottom border-5 pb-4 fw-bolder h1 mt-2">Data Engineer</h2>
                    <p className="mb-0 mt-2 text-white">Who Completed <span className="fw-bolder">20+ Portfolio Projects</span></p>
                </div>

            </>
        )
    }
}