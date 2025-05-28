
const Footer = () =>{
    return(
        <footer className="bg-body-tertiary text-center py-5">
            <div className="container p-4 pb-0">
                <section className="">
                <form action="">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5 col-12">
                            <div  className="form-outline mb-4">
                                <input type="email" id="form5Example26" className="form-control" placeholder="Enter your Email"/>
                                
                            </div>
                        </div>
                        <div className="col-auto">
                            <button data-mdb-ripple-init="" type="submit" className="btn btn-primary mb-4">
                                Sub <span>:)</span>
                            </button>
                        </div>
                    </div>
                </form>
                </section>
            </div>
            <div className="text-center p-3"  style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2025 Copyright  <span className="fs-6 text-primary">LLwMeaning.com</span>
            </div>
        </footer>
    )
}

export default Footer; 