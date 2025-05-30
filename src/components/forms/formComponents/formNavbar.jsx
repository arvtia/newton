import { Link } from "react-router-dom";


const FormNavbar =() =>{
    return(
        <div className="py-3 my-5 py-xl-4">
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-soft">
                <div className="container-fluid">
                    <Link to={"/forms"} className="navbar-brand text-primary fw-bold "> 
                            Froms
                    </Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to={"contact"} className="nav-link">
                                Contact
                            </Link>
                            <Link to={"login"} className="nav-link">
                                Login Form
                            </Link>
                            <Link to={"register"} className="nav-link">
                                Register Form
                            </Link>
                            <Link to={"subscription"} className="nav-link">
                                Subscription
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default FormNavbar;