const cardData = [
  {
    id: 1,
    content: "Discover the power of creativity. \nYour ideas can change the world. \nLet’s build something amazing today. \nStart your journey now!",
    icon: "bi bi-lightbulb",
    button: "Learn More",
  },
  {
    id: 2,
    content: "Technology drives innovation. \nFrom AI to blockchain, explore new frontiers. \nStay ahead in the digital revolution. \nTransform the future with your skills!",
    icon: "bi bi-cpu",
    button: "Learn More",
  },
  {
    id: 3,
    content: "Health and wellness matter. \nPrioritize self-care for a balanced life. \nSmall habits make a big difference. \nEmbrace a healthier lifestyle today!",
    icon: "bi bi-heart-pulse",
    button: "Learn More",
  },
  {
    id: 4,
    content: "Travel opens new perspectives. \nExperience different cultures and landscapes. \nEvery journey brings inspiration. \nWhere will your next adventure take you?",
    icon: "bi bi-globe",
    button: "Learn More",
  },
  {
    id: 5,
    content: "Personal development fuels growth. \nExpand your skills and knowledge. \nSet goals and chase your dreams. \nBecome the best version of yourself!",
    icon: "bi bi-person-check",
    button: "Learn More",
  },
  {
    id: 6,
    content: "Business and leadership shape success. \nDevelop strategic thinking and innovation. \nLead with confidence and inspire others. \nCreate impact in your industry!",
    icon: "bi bi-briefcase",
    button: "Learn More",
  },
  {
    id: 7,
    content: "Sustainability drives change. \nProtect the planet with small actions. \nSupport eco-friendly choices. \nMake a difference for future generations!",
    icon: "bi bi-recycle",
    button: "Learn More",
  },
  {
    id: 8,
    content: "Education empowers minds. \nNever stop learning and growing. \nKnowledge unlocks new possibilities. \nInvest in your future with education!",
    icon: "bi bi-book",
    button: "Learn More",
  },
  {
    id: 9,
    content: "Community and connections matter. \nBuild meaningful relationships. \nSupport and uplift others. \nTogether, we create a better world!",
    icon: "bi bi-people",
    button: "Learn More",
  },
];

const Cards =() =>{
    return(
        <div className="py-4 py-lg-5 mt-5">
            <div className="mb-4">
                <div className="col-12 col-lg-11 col-xl-11 justify-content-center">
                    <div className="my-3 gy-4 gy-lg-3 d-flex flex-wrap justify-content-center">
                        {/* i wanna insert the cards in here  using map function */}
                        { cardData.map((card)=>(
                            <div className=" card p-3 m-2" key={card.id} style={{width:"250px"}} >
                                <i className={`${card.icon} fs-1 text-primary`}></i>
                                <p className="mt-2">{card.content}</p>
                                <button className="btn btn-light extra-shdow-soft">{card.button}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Cards;


