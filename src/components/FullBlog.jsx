import { useParams } from "react-router-dom";
// const fullBlogData = [
//     {id: 1, title: "", firstParah: " ", img:"src", imgCaption:"", mainParah:"",img2:"", publishedDate: "" }
// ]



const fullBlogData = [
    {
        meta:"discover",
        id: 1,
        title: "The Future of AI: What's Next?",
        firstParah: "Artificial Intelligence is evolving rapidly, shaping industries worldwide. From automating mundane tasks to enhancing complex decision-making processes, AI has become an integral part of our everyday lives. Businesses and researchers alike are harnessing its potential to improve efficiency, drive innovation, and tackle global challenges. As AI continues to advance, it raises both exciting opportunities and critical ethical considerations that will define its role in our future.",
        img: "https://tinyurl.com/33u3x4pv",
        imgCaption: "AI-driven technology revolutionizing businesses",
        mainParah: "In recent years, AI has transformed sectors like healthcare, finance, and education. In medicine, AI-driven diagnostics are reducing errors and accelerating treatments, while financial institutions use predictive analytics to mitigate risks. Education is seeing AI-powered tutoring systems enhance personalized learning experiences. Experts predict advancements in generative AI, robotics, and ethical AI development will further shape our future, providing both groundbreaking innovation and complex dilemmas. As AI-generated content becomes indistinguishable from human-created work, ensuring transparency and responsible usage will be crucial. Researchers are striving to develop ethical AI frameworks that maintain fairness, eliminate bias, and foster inclusivity. Whether it’s autonomous vehicles navigating city streets or AI-driven assistants simplifying daily tasks, the future promises an exciting interplay between technological prowess and ethical responsibility.",
        img2: "https://tinyurl.com/2x3bu4wh",
        figcaption: "numerous places to visit ",
        publishedDate: "2025-05-28"
    },
    {
        meta: "technology",
        id: 2,
        title: "Top Travel Destinations for 2025",
        firstParah: "Planning your next adventure? Here are the best places to visit in 2025. Travel trends are shifting toward immersive experiences, sustainability, and off-the-beaten-path adventures. Whether you crave cultural enrichment, scenic landscapes, or thrilling activities, this year's top destinations offer something for every traveler. With a focus on eco-conscious tourism and authentic local encounters, 2025 promises unforgettable journeys that go beyond mere sightseeing.",
        img: "https://tinyurl.com/4z4ebr8x",
        imgCaption: "Sunset over a tropical paradise",
        mainParah: "This year, travelers are flocking to destinations like Bali for its serene beaches, Kyoto for its rich heritage, and Patagonia for breathtaking landscapes. Bali's lush greenery, vibrant culture, and stunning coastlines make it a perfect haven for relaxation, while Kyoto’s centuries-old temples and cherry blossom-lined streets offer a profound journey through history. Patagonia captivates adventurers with its towering glaciers, deep fjords, and dramatic mountains, providing a paradise for hikers and nature lovers. Meanwhile, European gems such as Santorini and Prague continue to attract visitors with their timeless charm. As travelers embrace slow tourism, the focus shifts from hurried itineraries to deep connections with local communities. Sustainable travel initiatives, including eco-resorts and responsible wildlife excursions, are gaining traction, ensuring future generations can enjoy the beauty of these incredible locations. Whether you seek tranquility, adventure, or cultural immersion, 2025 is the year to explore beyond your comfort zone.",
        img2: "https://tinyurl.com/54yerkkk",
        figcaption: "numerous places to visit ",
        publishedDate: "2025-05-28"
    },
    {
        meta: "Health",
        id: 3,
        title: "Healthy Eating Habits for a Better Life",
        firstParah: "Eating right is the key to maintaining overall well-being. Nutrition isn't just about consuming food—it's about fueling the body, enhancing energy levels, and preventing long-term health complications. With an increasing focus on holistic wellness, people are turning to nutrient-rich diets, mindful eating, and sustainable food practices to foster a healthier lifestyle. By incorporating whole foods and cutting out processed ingredients, individuals can achieve a balanced diet that supports both physical and mental health.",
        img: "https://tinyurl.com/2n5zv6xd",
        imgCaption: "A colorful plate of fresh vegetables",
        mainParah: "Balanced nutrition plays a crucial role in boosting immunity and mental clarity. Experts recommend a diet rich in whole grains, lean proteins, and fresh fruits to enhance longevity and prevent lifestyle diseases. Nutrient-dense foods like avocados, nuts, and berries are packed with antioxidants, helping combat inflammation and oxidative stress. Meanwhile, hydration is just as essential—drinking sufficient water aids digestion, skin health, and cognitive function. Many cultures embrace time-tested dietary traditions, such as the Mediterranean diet, which emphasizes heart-friendly ingredients like olive oil, seafood, and fresh vegetables. With growing concerns over food sustainability, plant-based diets and locally sourced ingredients are gaining popularity. Eating mindfully—focusing on portion control, savoring flavors, and listening to hunger cues—can lead to healthier relationships with food. As new dietary research emerges, the path to wellness continues to evolve, offering exciting insights into how simple dietary choices can yield profound health benefits.",
        img2: "https://tinyurl.com/z5rckmdt",
        figcaption: "numerous places to visit ",
        publishedDate: "2025-05-28"
    },
    {
        meta: "Travel",
        id: 4,
        title: "The Rise of Electric Vehicles: A Sustainable Future",
        firstParah: "Electric vehicles (EVs) are rapidly transforming the automotive industry, offering an eco-friendly alternative to traditional gasoline-powered cars. As climate concerns intensify, governments and manufacturers are investing heavily in EV technology to reduce carbon emissions and dependence on fossil fuels.",
        img: "https://plus.unsplash.com/premium_photo-1715639312136-56a01f236440?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgCaption: "A sleek electric car charging at a solar-powered station",
        mainParah: "The global push for sustainability has led to impressive advancements in EV battery efficiency, charging infrastructure, and affordability. Many countries are setting ambitious targets to phase out internal combustion engines within the next few decades. Brands like Tesla, Rivian, and traditional automakers such as Ford and Volkswagen are innovating in electric mobility, bringing stylish and high-performance options to consumers. Governments are also incentivizing EV adoption through subsidies and expanding charging networks to make ownership more convenient. As battery technology continues to evolve, we may soon see solid-state batteries offering extended ranges and faster charging times, further solidifying EVs as the future of transportation.",
        img2: "https://plus.unsplash.com/premium_photo-1715789261470-fb25ffbf70d3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishedDate: "2025-05-28"
    },
    {
        meta: "Personal_development",
        id: 5,
        title: "The Impact of Remote Work on Productivity and Work-Life Balance",
        firstParah: "Remote work has reshaped the way professionals operate, providing flexibility and reducing commute-related stress. But does working from home actually boost productivity and improve work-life balance? Experts are divided on the issue, and companies are continuously adjusting strategies to optimize remote work environments.",
        img: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgCaption: "A modern home office setup with ergonomic design",
        mainParah: "Since the pandemic accelerated remote work adoption, employees have enjoyed greater autonomy over their schedules, allowing them to balance personal responsibilities more effectively. However, challenges such as digital burnout, communication gaps, and decreased social interactions persist. Businesses are addressing these concerns by promoting hybrid work models, offering coworking space memberships, and introducing mental health initiatives. Recent studies suggest that employees working remotely tend to accomplish more in focused environments, but collaboration thrives in physical office settings. As work culture evolves, organizations must find ways to blend flexibility with productivity while ensuring employees maintain a healthy work-life balance.",
        img2: "https://plus.unsplash.com/premium_photo-1681400668073-a1947604dd36?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishedDate: "2025-05-28"
    },
    {
        meta: "Business",
        id: 6,
        title: "The Science Behind Mindfulness: How Meditation Benefits Mental Health",
        firstParah: "In a fast-paced world filled with distractions, mindfulness and meditation have emerged as powerful tools for enhancing mental well-being. By practicing awareness and cultivating inner peace, individuals can reduce stress, improve focus, and strengthen emotional resilience.",
        img: "https://images.unsplash.com/photo-1695548303391-21a21138f642?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgCaption: "A serene meditation space overlooking nature",
        mainParah: "Scientific research supports the numerous benefits of mindfulness, from lowering cortisol levels to improving sleep quality. Studies have shown that individuals who meditate regularly experience greater emotional regulation, leading to lower anxiety and improved overall happiness. Mindfulness techniques such as breathwork, guided visualization, and body scans help individuals remain present and reduce overthinking. Additionally, corporate wellness programs are integrating meditation sessions to enhance productivity and creativity. As more people embrace mindfulness, this ancient practice continues to evolve as a modern approach to mental health and personal growth.",
        img2: "https://images.unsplash.com/photo-1732780769402-b4ca6455ded0?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishedDate: "2025-05-28"
    },
    {
        meta: "Sustainability",
        id: 7,
        title: "How Blockchain is Changing the Future of Finance",
        firstParah: "Blockchain technology is revolutionizing financial transactions, offering decentralized solutions that enhance security and transparency. As industries explore the potential of digital currencies and smart contracts, blockchain is set to transform global finance.",
        img: "https://plus.unsplash.com/premium_photo-1714618942735-5f1585da8b88?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgCaption: "Digital blockchain network representing secure transactions",
        mainParah: "From cryptocurrency to decentralized finance (DeFi), blockchain is eliminating intermediaries and reducing transaction costs. Bitcoin and Ethereum have paved the way for secure, peer-to-peer financial exchanges, challenging traditional banking systems. Businesses are adopting blockchain for supply chain management, identity verification, and fraud prevention, demonstrating its versatility beyond digital currencies. Governments and financial institutions are also researching central bank digital currencies (CBDCs) to modernize monetary policies. As regulation catches up with innovation, blockchain’s integration into mainstream financial ecosystems continues to accelerate, promising a more efficient and secure future.",
        img2: "https://images.unsplash.com/photo-1628498642649-05834ff30fae?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://tinyurl.com/48w38bhx",
        publishedDate: "2025-05-28"
    },
    {
        meta: "Education",
        id: 8,
        title: "The Future of Space Exploration: What’s Next for Humanity?",
        firstParah: "Space exploration has entered a new era, with ambitious missions aiming to colonize Mars, extract resources from asteroids, and unlock the mysteries of the universe. As private companies and national space agencies collaborate, humanity is on the brink of incredible discoveries.",
        img: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgCaption: "A futuristic spacecraft preparing for a deep-space mission",
        mainParah: "NASA, SpaceX, and other organizations are pushing boundaries with groundbreaking projects such as Artemis, which aims to establish a sustainable human presence on the Moon. Meanwhile, Mars colonization efforts are advancing with robotic missions and habitat research. The rise of space tourism allows civilians to experience zero gravity, bringing commercial spaceflight closer to reality. Scientists are also investigating exoplanets for signs of life, challenging our understanding of the cosmos. With technological advancements in propulsion systems, AI-assisted space exploration, and interstellar travel theories, the future of space exploration holds limitless possibilities for humankind.",
        img2: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishedDate: "2025-05-28"
    }

];


// const fullBlogData = [
//   { id: 1, title: "Blog Title", firstParah: "Intro text", img: "src", imgCaption: "", mainParah: "", img2: "", publishedDate: "2025-05-29" },
//   // Add more blog data objects here
// ];

const FullBlog = () => {
  const { meta } = useParams();
  const blog = fullBlogData.find((m) => m.meta === (meta));

  if (!blog) return <p className="text-danger text-center">Blog not found.</p>;

  return (
    <div className="py-4 mt-5">
        <div className="container-fluid justify-content-center">
            <div className="row gy-4 gy-lg-3 gy-xl-4">
                <div className="col-12 col-lg-10 col-xl-10 justify-content-center">
                    <div className="py-3 mt-3">
                        <div className="col-12 col-md-11 col-xl-11 col-lg-10">
                            <div className="mb-2">
                                <h4 className="text-dark text-start">
                                    <strong>{blog.title}</strong>
                                </h4>
                                <hr className="hr" />
                            </div>
                            <div className="text-body-secondary">
                                <p className="fs-6">{blog.firstParah}</p>
                            </div>
                            <hr className="hr mb-3" />
                            <figure className="figure">
                                <img
                                    src={blog.img}
                                    className="figure-img img-fluid rounded"
                                    alt="A generic square placeholder image with rounded corners in a figure."
                                />
                                <figcaption className="figure-caption">{blog.imgCaption}</figcaption>
                            </figure>
                            <div className="mb-3">
                                <p className="fs-6">{blog.mainParah}</p>
                            </div>
                            <div className="mb-3">
                            <img src={blog.img2} alt="" className="img-fluid rounded" />
                            <figcaption>{blog.figcaption}</figcaption>
                            </div>
                            <hr className="hr mb-2" />
                            <p className="fs-6 text-dark">Published on: {blog.publishedDate}</p>
                        </div>
                        <div className="mb-3 gx-lg-3">
                            <div className="justify-content-between">
                                <button className="btn btn-md extra-shdow-soft" onClick={() => window.history.back()}>Prev</button>
                                {/* <button className="btn btn-md extra-shdow-soft"> Next</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FullBlog;


// const CollectionLinks = () =>{
//     return(
//         <div className="py-4 my-4">
//             <div className="row gy-2 gy-lg-3">
//                 <div className="col-11 col-md-11 col-lg-11 col-xl-10 mx-auto">
//                     <div className="container">
//                         <Link to={"/blog/"}></Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



export {FullBlog}