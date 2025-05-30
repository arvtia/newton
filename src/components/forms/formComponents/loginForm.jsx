import { useState } from "react";


const LoginFrom =() =>{
    
    return(
        <div className="py-4 py-xl-4 mt-lx-3">
            <div className="row gy-lg-3 gy-xl-4">
                <div className="col-12  col-md-6 col-lg-6 col-xl-5 mx-auto px-md-4 px-4">
                    <form>
                       <>
                       <p className="text-center fs-4">Login</p>
                        <div className="form-floating mb-3">
                            <input
                            type="email"
                            className="form-control"
                            placeholder=""
                            />
                            <label htmlFor="">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                            type="password"
                            className="form-control"
                            placeholder=""
                            />
                            <label >Password</label>
                        </div>
                        <div className="btn form-control mt-4 blueish-btn text-white shadow-soft" type="submit">Login</div>
                        </>
                    </form>
                </div>
            </div>
        </div>
    )
}

const RegisterNew = () =>{
    return(
        <div className="py-4 my-xl-5">
            <div className="row gy-3">
                <div className="col-11 col-md-6 col-lg-6 col-xl-6 mx-auto px-5">
                    <form>
                       <>
                       <p className="text-center fs-4">Registration</p>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder=""
                            />
                            <label htmlFor="">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder=""
                            />
                            <label >Enter your Phone number</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                placeholder=""
                            />
                            <label >Password</label>
                        </div>
                        <div className="btn form-control mt-4 blueish-btn text-white shadow-soft" type="submit">Login</div>
                        </>
                    </form>
                </div>
            </div>
        </div>
    )
}

function handleSubmit(){
    alert("what ? did u really submit it?")
}


const ContactUs = () =>{
    
    return(
        <div className="py-4 my-5">
            <div className="row py-lg-5 gy-4">
                <div className="col-11 col-lg-6 col-xl-6 mx-auto">
                    <form action={handleSubmit}>
                        <div className="mb-3">
                            <div className="form-floating">
                                <input 
                                className="form-control" 
                                type="email"
                                placeholder=""
                                id="email"
                                />
                                <label htmlFor="email">Enter your Email</label>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-6">
                                <div className="form-floating">
                                    <input 
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    id="First name"
                                    />
                                    <label htmlFor="First name">First Name</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input 
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    id="Last name"
                                    />
                                    <label htmlFor="Last name">Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    style={{ height: 100 }}
                                    defaultValue={""}
                                />
                                <label htmlFor="floatingTextarea2">Comments</label>
                            </div>
                        </div>

                        <button 
                        className="btn shadow-soft"
                        type="submit"
                        >Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export {ContactUs, LoginFrom, RegisterNew};