import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    componentDidMount() {
        const linksBtn = document.querySelectorAll('.pressMe');

        linksBtn.forEach((btn) => {
            btn.addEventListener('click', function (e) {
                linksBtn.forEach((btn) => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');
            })
        })





        const navbar = document.querySelector('.navbar');
        window.onscroll = function () {
            if (window.scrollY > 100) {
                navbar.style.height = '80px';
            } else {
                navbar.style.height = '100px';
            }
        }
    }

    render() {

        return (

            <>
                <div className="h-100px"></div>
                <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-custom h-100px">
                    <div className="container position-relative">
                        <Link className="navbar-brand pressMe fs-custom fw-bolder" to="/Start-Frame-Work">MOSTAFA ATEF FAHMI</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse bg-custom z-3 p-3 rounded navbar-collapse" id="navbarNav">
                            <ul className="ms-auto navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link pressMe fw-bolder mx-2" aria-current="page" to="education">EDUCATION</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link pressMe fw-bolder mx-2" aria-current="page" to="courses">COURSES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link pressMe fw-bolder mx-2" to="port">PROJECTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link pressMe fw-bolder mx-2" to="skills">SKILLS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link pressMe fw-bolder mx-2" to="contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }

}