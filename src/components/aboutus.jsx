const AboutUsSection = () =>{
    return(
        <div className="py-4 py-md-5">
            <div className="container">
                <div className="row gy-3 gy-lg-4 align-items-center justify-content-center  mx-auto">
                    <div className="col-12 col-lg-6 col-xl-5">
                        <img src="https://tinyurl.com/3ja6smz9" loading="lazy" className="img-fluid rounded" style={{objectFit:"cover"}} alt="about-1" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <div className="row gy-3 gx-2 gy-lg-4 justify-content-center">
                            <div className="col-12 col-lg-12 col-xl-12">
                                <h2 className="mb-3">Who Are We ?</h2>
                                <p className="fs-6">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.
                                    Voluptatum obcaecati libero molestiae assumenda adipisci eveniet quasi est.
                                </p>
                            </div>
                            <div className="col-12 col-lg-12 col-xl-12 mx-auto">
                                <div className="mb-3 d-flex ">
                                    <div className="col-6 col-lg-6 col-xl-6">
                                        <h5>Versatile Brand</h5>
                                        <p className="fs-6">
                                            Lorem ipsum dolor sit amet.
                                            Deserunt cumque laborum modi dolores.
                                        </p>
                                    </div>
                                    <div className="col-6 col-lg-5 col-xl-6">
                                        <h5>Digital Agency</h5>
                                        <p className="fs-6">
                                            Lorem ipsum dolor sit amet.
                                            Deserunt cumque laborum modi dolores.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const AboutTitle = () =>{
    return (
        <div className="py-5 py-lg-5 mt-5 mb-5">
            <div className="container">
                <div className="row py-4 gy-4 gy-lg-5 justify-contain-center">
                    <div className="col-10 col-lg-12 col-xl-12">
                        <div className="text-center">
                            <h1 className="display-1">Living Life With <mark>Meaning!</mark></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export {AboutUsSection, AboutTitle}