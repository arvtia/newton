import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-white extra-shdow-soft"> 
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand" > <span className="fs-4"><strong>LLwMeaning</strong></span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"blogs"} className="nav-link">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/features"} className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;