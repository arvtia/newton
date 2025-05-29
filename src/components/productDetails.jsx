import { useParams  } from "react-router-dom";

const productsDetails = [
    {   
        Prodid: 1,
        ProdName: "Wireless Earbuds",
        ProdImg: "https://m.media-amazon.com/images/I/71RFdy6y6LL._AC_UF1000,1000_QL80_.jpg",
        prodDescription: "Crystal-clear sound with noise cancellation and long battery life.",
        prodUses: "Perfect for workouts, commuting, and immersive music experiences.",
        productFeatures: "Bluetooth 5.0, touch controls, waterproof, 20-hour battery life.",
        productComparison: "Compared to competitors, these earbuds offer deeper bass and longer battery life.",
        ProdPrice: "$49.99",
    },
    {   
        Prodid: 2,
        ProdName: "Smart Watch",
        ProdImg: "https://mobilezon.in/wp-content/uploads/2023/12/S12-Ultra-Smart-Watch-4G-Sim-Card-With-Rotating-Camera.jpg",
        prodDescription: "Advanced smartwatch with fitness tracking and seamless phone integration.",
        prodUses: "Great for monitoring health, tracking workouts, and receiving notifications.",
        productFeatures: "Heart rate monitor, GPS, waterproof, sleep tracking, customizable watch faces.",
        productComparison: "Offers better battery life and health metrics than similar brands.",
        ProdPrice: "$129.99",
    },
    {   
        Prodid: 3,
        ProdName: "Portable Blender",
        ProdImg: "https://lsmedia.linker-cdn.net/281662/2021/7090123.jpeg?width=1200&height=1125",
        prodDescription: "Compact and rechargeable blender for making smoothies anywhere.",
        prodUses: "Ideal for travel, gym use, and quick healthy meal preparation.",
        productFeatures: "USB rechargeable, powerful blades, lightweight, BPA-free bottle.",
        productComparison: "Unlike traditional blenders, this is easy to carry and clean.",
        ProdPrice: "$39.99",
    },
    {   
        Prodid: 4,
        ProdName: "Gaming Mouse",
        ProdImg: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-620m-mouse/media-gallery/black/mouse-alienware-aw620m-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=256&qlt=100,1&resMode=sharp2&size=256,320&chrss=full",
        prodDescription: "Ultra-responsive gaming mouse with customizable buttons and RGB lighting.",
        prodUses: "Designed for professional gaming, work efficiency, and ergonomic comfort.",
        productFeatures: "Adjustable DPI, mechanical switches, ergonomic grip, programmable buttons.",
        productComparison: "Offers higher precision and faster response time than basic mice.",
        ProdPrice: "$59.99",
    },
    {   
        Prodid: 5,
        ProdName: "Electric Toothbrush",
        ProdImg: "https://images1.dentalkart.com/media/catalog/product/2/3/234wdasd.jpg",
        prodDescription: "Rechargeable electric toothbrush with deep cleaning technology.",
        prodUses: "Ideal for maintaining dental hygiene and preventing gum diseases.",
        productFeatures: "Multiple brushing modes, timer function, soft bristles, waterproof.",
        productComparison: "More effective at removing plaque than manual toothbrushes.",
        ProdPrice: "$79.99",
    },
    {   
        Prodid: 6,
        ProdName: "Electric trimmer",
        ProdImg: "https://skullshaver.in/cdn/shop/files/BBTAmazonimage32.jpg?v=1736268163",
        prodDescription: "Rechargeable electric toothbrush with deep cleaning technology.",
        prodUses: "Ideal for maintaining dental hygiene and preventing gum diseases.",
        productFeatures: "Multiple brushing modes, timer function, soft bristles, waterproof.",
        productComparison: "More effective at removing plaque than manual toothbrushes.",
        ProdPrice: "$79.99",
    }

];

const ProductEach = () => {
    const { id } = useParams(); 
    const product = productsDetails.find(prod => prod.Prodid === parseInt(id));

    if (!product) {
        return <h2>Product not found</h2>; 
    }

    return (
        <div className="py-3 gy-3 mt-5">
            <div className="row py-lg-4 py-xl-4">
                <div className="col-12 col-md-8 col-xl-9 mx-auto">
                    <div className="container">
                        <div className="py-2">
                            <h4>{product.ProdName}</h4>
                        </div>
                        <div className="row gy-2 gy-lg-3 gy-xl-4">
                            <div className="col-5 mx-auto mt-4">
                                <img  src={product.ProdImg} alt="product-img" className="img-fluid rounded" height={"100%"} width={"100%"} style={{objectFit:"cover"}}/>
                            </div>
                            <div className="mb-2">
                                <p className="fs-6">{product.prodDescription}</p>
                            </div>
                            <hr className="hr"/>
                            <div className="mb-1">
                                <p className="mb-1"><strong>Uses:</strong> {product.prodUses}</p>
                            </div>
                            <div className="mb-1">
                                <p className="fs-5"><strong>Comparison</strong></p>
                                <p><strong>Features:</strong> {product.productFeatures}</p>
                                <p><strong>Compared to others:</strong> {product.productComparison}</p>
                            </div>
                            <div className="container"><strong>Price:</strong> {product.ProdPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductEach