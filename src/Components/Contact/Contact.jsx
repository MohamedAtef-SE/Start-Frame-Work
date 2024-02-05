
import { Component } from "react";

export default class Contact extends Component {


    render() {
        return (

            <>
                <div className="contact min-vh-100 container d-flex flex-column justify-content-center align-items-center">
                    <h1 className='pb-4 border-bottom border-5 position-relative fw-bolder mb-5'>CONATCT SECTION</h1>
                    <form className="container d-flex flex-column justify-content-center align-items-center p-4">
                        <input name="fName" placeholder="Full Name" className="shadow-none border-0 bg-body-secondary form-control w-md-50 mb-4" type="text" />
                        <input name="mail" placeholder="Email Address" className="shadow-none border-0 bg-body-secondary form-control w-md-50 mb-4" type="email" />
                        <input name="mobile" placeholder="Mobile Number" className="shadow-none border-0 bg-body-secondary form-control w-md-50 mb-4" type="tel" />
                        <input name="jobTitle" placeholder="Job Title" className="shadow-none border-0 bg-body-secondary form-control w-md-50 mb-4" type="text" />
                        <textarea className="shadow-none border-0 bg-body-secondary  form-control w-md-50" name="msgMe" placeholder="Feel Free With Texting Me..." id="msgMe"></textarea>
                        <button className="btn btn-custom text-white fw-bolder">SUBMIT</button>
                    </form>
                </div>



            </>
        )


    }
}