
import {  Link } from "react-router-dom";


const productsList= [
    {   
        Prodid: 1,
        ProdName: "Wireless Earbuds",
        ProdImg: "https://m.media-amazon.com/images/I/71RFdy6y6LL._AC_UF1000,1000_QL80_.jpg",
        prodDes: "High-quality sound with noise cancellation.",
        ProdPrice: "$49.99",
    },
    {   
        Prodid: 2,
        ProdName: "Smart Watch",
        ProdImg: "https://mobilezon.in/wp-content/uploads/2023/12/S12-Ultra-Smart-Watch-4G-Sim-Card-With-Rotating-Camera.jpg",
        prodDes: "Tracks fitness and heart rate, compatible with smartphones.",
        ProdPrice: "$129.99",
    },
    {   
        Prodid: 3,
        ProdName: "Portable Blender",
        ProdImg: "https://lsmedia.linker-cdn.net/281662/2021/7090123.jpeg?width=1200&height=1125",
        prodDes: "Blend smoothies on the go with rechargeable battery.",
        ProdPrice: "$39.99",
    },
    {   
        Prodid: 4,
        ProdName: "Gaming Mouse",
        ProdImg: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-620m-mouse/media-gallery/black/mouse-alienware-aw620m-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=256&qlt=100,1&resMode=sharp2&size=256,320&chrss=full",
        prodDes: "Ergonomic design with customizable buttons.",
        ProdPrice: "$59.99",
    },
    {   
        Prodid: 5,
        ProdName: "Electric Toothbrush",
        ProdImg: "https://images1.dentalkart.com/media/catalog/product/2/3/234wdasd.jpg",
        prodDes: "Deep clean with multiple brushing modes.",
        ProdPrice: "$79.99",
    },
    {   
        Prodid: 6,
        ProdName: "Electric Toothbrush",
        ProdImg: "https://skullshaver.in/cdn/shop/files/BBTAmazonimage32.jpg?v=1736268163",
        prodDes: "Deep clean with multiple brushing modes.",
        ProdPrice: "$79.99",
    }
];



const Products = () => {
    return (
        <div className="py-5 mt-5">
            <div className="mb-4 py-5">
                <div className="col-12 col-lg-12 col-xl-12 d-flex mx-auto overflow-x-scroll">
                    {productsList.map((prod) => (
                        <div className="card px-3 py-3 mx-2 my-2" key={prod.Prodid} style={{ minWidth: "290px" }}>
                            <img src={prod.ProdImg} alt="product-img" className="img-fluid rounded"  style={{ height:"280px", width:"280px", objectFit:"cover"}}/>
                            <hr className="hr mb-2" />
                            <h4 className="text-primary px-2">{prod.ProdName}</h4>
                            <div className="mb-2 px-2">
                                <p className="fs-6 text-dark">{prod.prodDes}</p>
                            </div>
                            <div className="row gy-2">
                                <div className="container-fluid d-flex align-items-center">
                                    <button className="btn extra-shdow-soft me-4">Buy now</button>
                                    <button className="btn extra-shdow-soft">Cart</button>
                                    <Link to={`/Products/${prod.Prodid}`} className="btn"> {/* Fixed Route */}
                                            <i className="bi bi-bag"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};




export {Products};