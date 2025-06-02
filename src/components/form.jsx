const Forms =() =>{
    return(
        <div className="py-4 my-4">
            <div className="container">
                <div className="row gy-lg-4 py-3">
                    <div className="col-12 col-lg-11 col-xl-11 justify-content-center">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-5 mx-auto mt-5 ">
                            <>
                            {/* Pills navs */}
                            <ul className="nav nav-pills nav-justified mb-3 " id="ex1" role="tablist">
                                <li className="nav-item" role="presentation">
                                <a className="nav-link active " id="tab-login" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">
                                    Login
                                </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                <a className="nav-link btn extra-shdow-soft" id="tab-register" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">
                                    Register
                                </a>
                                </li>
                            </ul>
                            {/* Pills navs */}
                            {/* Pills content */}
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                <form>
                                    <div className="text-center mb-3">
                                    <p>Sign in with:</p>
                                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="bi bi-facebook" />
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="bi bi-google" />
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="bi bi-twitter" />
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="bi bi-github" />
                                    </button>
                                    </div>
                                    <p className="text-center">or:</p>
                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                    <input type="email" id="loginName" className="form-control" />
                                    <label className="form-label" htmlFor="loginName">Email or username</label>
                                    </div>
                                    {/* Password input */}
                                    <div className="form-outline mb-4">
                                    <input type="password" id="loginPassword" className="form-control" />
                                    <label className="form-label" htmlFor="loginPassword">Password</label>
                                    </div>
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Sign in
                                    </button>
                                </form>
                                </div>
                                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                <form>
                                    <div className="text-center mb-3">
                                    <p>Sign up with:</p>
                                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="bi bi-facebook" />
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="bi bi-google" />
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="bi bi-twitter" />
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="bi bi-github" />
                                    </button>
                                    </div>
                                    <p className="text-center">or:</p>
                                    {/* Name input */}
                                    <div className="form-outline mb-4">
                                    <input type="text" id="registerName" className="form-control" />
                                    <label className="form-label" htmlFor="registerName">Name</label>
                                    </div>
                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                    <input type="email" id="registerEmail" className="form-control" />
                                    <label className="form-label" htmlFor="registerEmail">Email</label>
                                    </div>
                                    {/* Password input */}
                                    <div className="form-outline mb-4">
                                    <input type="password" id="registerPassword" className="form-control" />
                                    <label className="form-label" htmlFor="registerPassword">Password</label>
                                    </div>
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-primary btn-block mb-3">
                                    Register
                                    </button>
                                </form>
                                </div>
                            </div>
                            {/* Pills content */}
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forms;