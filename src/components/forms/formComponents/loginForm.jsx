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




const ContactUs = () =>{
    return(
        <div className="py-4 my-5">
            <div className="row py-lg-5 gy-4">
                <h4 className="text-center fw-bold">Contact Us</h4>
                <div className="col-11 col-lg-6 col-xl-6 mx-auto">
                    <form>
                        <div className="mb-3">
                            <div className="form-floating">
                                <select
                                    className="form-select"
                                    id="floatingSelect"
                                >
                                <option >Choose Catergory</option>
                                    <option value={1}>Customer Support</option>
                                    <option value={2}>Career</option>
                                    <option value={3}>Report Complaint</option>
                                </select>
                                <label htmlFor="floatingSelect">Works with selects</label>
                            </div>

                        </div>
                        <div className="mb-3">
                            <div className="form-floating">
                                <input 
                                className="form-control" 
                                type="email"
                                placeholder=""
                                id="email"
                                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                required
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
                                    pattern="^[A-Za-z]+$"
                                    required

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
                                    pattern="^[A-Za-z]+$"
                                    required
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
                                    
                                    style={{ height: 100 }}
                                    defaultValue={""}
                                />
                                <label>Comments</label>
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


const SubscriptionFrom = () =>{
    return (
        <div className="py-4 my-5 gy-3 ">
            <div className="mb-4">
                <div className="row gy-4 gx-2">
                    <div className="col-11 col-md-6 col-lg-7 col-xl-7 mx-auto">
                        <div className="mb-3">
                            <form >
                                <div className="row py-4 my-4">
                                    <div className="col-12 col-md-6 col-xl-6 col-lg-7">
                                        <h1>Subscription From</h1>
                                        <p className="text-secondary">please read the below informations before option for the subcription</p>
                                    </div>
                                </div>
                                <hr  className="hr"/>
                                <div className="mb-4">
                                    <p className="fw-bold py-4">Please complete all the information below</p>
                                </div>
                                <div className="row gy-2 my-3">
                                    <div className="col-4 ">
                                        <label htmlFor="name" className="fw-bold fs-5 py-2 sm-none">Name</label>
                                        <div className="form-floating">
                                            <input 
                                            type="text" 
                                            placeholder=""
                                            className="form-control"
                                            id="firstN"
                                            />
                                            <label htmlFor="firstN">First Name</label>
                                        </div>
                                    </div>
                                    {/* another impot */}
                                    <div className="col-4">
                                        <label htmlFor="name" className="fw-bold fs-5 py-2 sm-none">Middle Name</label>
                                        <div className="form-floating">
                                            <input 
                                            type="text" 
                                            placeholder=""
                                            className="form-control"
                                            id="firstN"
                                            />
                                            <label htmlFor="firstN">Middle Name</label>
                                        </div>
                                    </div>
                                    {/* another input */}
                                    <div className="col-4 ">
                                        <label htmlFor="name" className="fw-bold fs-5 py-2 sm-none">Last Name</label>
                                        <div className="form-floating">
                                            <input 
                                            type="text" 
                                            placeholder=""
                                            className="form-control"
                                            id="firstN"
                                            />
                                            <label htmlFor="firstN">Last Name</label>
                                        </div>
                                    </div>
                                </div>
                                {/* another div mb-3 */}
                                <div className="mb-3">
                                    <div className="row gy-2">
                                        <div className="col-6 ">
                                            <p className="fw-bold fs-5 sm-none">Phone Number</p>
                                            <div className="form-floating">
                                                <input 
                                                type="number" 
                                                className="form-control"
                                                placeholder=""
                                                id="idknumber?"
                                                />
                                                <label htmlFor="idknumber?">Phone Number</label>
                                            </div>
                                        </div>
                                        <div className="col-6 ">
                                            <p className="fw-bold fs-5 sm-none ">Email</p>
                                            <div className="form-floating">
                                                <input 
                                                type="Email" 
                                                className="form-control"
                                                placeholder=""
                                                id="idkemail"
                                                />
                                                <label htmlFor="idkemail">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* another mb-down-2 */}
                                <div className="mb-3">
                                    <div className="row gy-2 gy-lg-3">
                                        <div className="col-12 col-md-12 col-lg-12">
                                            <p className="fs-5 fw-bold sm-none">Address</p>
                                            <div className="form-floating">
                                                <input 
                                                type="text" 
                                                placeholder=""
                                                className="form-control"
                                                id="addres"
                                                />
                                                <label htmlFor="addres">street address</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* nanother input box */}
                                <div className="mb-3">
                                    <div className="row gy-3 gy-xl-3">
                                        <div className="col-12 col-lg-12 col-xl-12">
                                            <div className="form-floating">
                                                <input 
                                                type="text" 
                                                placeholder=""
                                                className="form-control"
                                                id="next-address"
                                                />
                                                <label htmlFor="next-address">Street Address Lane 2 </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* input box for state province */}
                                <div className="mb-3">
                                    <div className="row gy-2 gy-lg-2">
                                        <div className="col-6">
                                            <div className="form-floating">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                id="idkcity?"
                                                />
                                                <label htmlFor="idkcity?">City</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating">
                                                <input 
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                id="idkcity?"
                                                />
                                                <label htmlFor="idkcity?">State / Province</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* another input section  */}
                                <div className="mb-3">
                                    <div className="row gy-3">
                                        <div className="col-12 col-lg-12 col-xl-12">
                                            <div className="form-floating">
                                                <input 
                                                type="text" 
                                                className="form-control"
                                                id="zipcode"
                                                placeholder=""
                                                />
                                                <label htmlFor="zipcode">Postal ID, Zip Code</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* comments and quesiton input */}
                                <div className="mb-3">
                                    <p className="fw-bold fs-5 py-2">Any Comments or Questions</p>
                                    <div className="form-floating">
                                        <textarea 
                                        className="form-control"
                                        placeholder=""
                                        id="textarea"
                                        style={{height:"100px"}}
                                        >
                                        </textarea>
                                        <label htmlFor="textarea">Type anything</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="row gy-3">
                                        <div className="col-12 col-md-6 div.col-lg-6 col-xl-6 mx-auto">
                                            <button type="submit" className="btn shadow-soft">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export {ContactUs, LoginFrom, RegisterNew, SubscriptionFrom};