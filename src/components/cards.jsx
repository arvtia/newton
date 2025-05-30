import { Link } from "react-router-dom";

const cardData = [
  {
    meta: "discover",
    id: 1,
    content: "Discover the power of creativity. \nYour ideas can change the world. \nLet’s build something amazing today. \nStart your journey now!",
    icon: "bi bi-lightbulb",
    button: "Learn More",
  },
  {
    meta: "technology",
    id: 2,
    content: "Technology drives innovation. \nFrom AI to blockchain, explore new frontiers. \nStay ahead in the digital revolution. \nTransform the future with your skills!",
    icon: "bi bi-cpu",
    button: "Learn More",
  },
  {
    meta: "Health",
    id: 3,
    content: "Health and wellness matter. \nPrioritize self-care for a balanced life. \nSmall habits make a big difference. \nEmbrace a healthier lifestyle today!",
    icon: "bi bi-heart-pulse",
    button: "Learn More",
  },
  {
    meta: "Travel",
    id: 4,
    content: "Travel opens new perspectives. \nExperience different cultures and landscapes. \nEvery journey brings inspiration. \nWhere will your next adventure take you?",
    icon: "bi bi-globe",
    button: "Learn More",
  },
  {
    meta: "Personal_development",
    id: 5,
    content: "Personal development fuels growth. \nExpand your skills and knowledge. \nSet goals and chase your dreams. \nBecome the best version of yourself!",
    icon: "bi bi-person-check",
    button: "Learn More",
  },
  {
    meta: "Business",
    id: 6,
    content: "Business and leadership shape success. \nDevelop strategic thinking and innovation. \nLead with confidence and inspire others. \nCreate impact in your industry!",
    icon: "bi bi-briefcase",
    button: "Learn More",
  },
  {
    meta: "Sustainability",
    id: 7,
    content: "Sustainability drives change. \nProtect the planet with small actions. \nSupport eco-friendly choices. \nMake a difference for future generations!",
    icon: "bi bi-recycle",
    button: "Sustainablitiy",
  },
  {
    meta: "Education",
    id: 8,
    content: "Education empowers minds. \nNever stop learning and growing. \nKnowledge unlocks new possibilities. \nInvest in your future with education!",
    icon: "bi bi-book",
    button: "Learn More",
  }
];

const Cards = () => {
  return (
    <div className="py-4 py-lg-5 mt-5">
      <div className="mb-4">
        <div className="col-12 col-lg-11 col-xl-11 justify-content-center">
          <div className="my-3 gy-4 gy-lg-3 d-flex flex-wrap justify-content-center">
            {/* Mapping through cardData to render cards dynamically */}
            {cardData.map((card) => (
              <div className="card p-3 m-2" key={card.id} style={{ width:"320px" }}>
                <i className={`${card.icon} fs-1 text-primary`}></i>
                <p className="mt-2">{card.content}</p>
                {/* Link to individual FullBlog page */}
                <Link to={`/blogs/${card.meta}`} >
                  <button className="btn btn-bg-light extra-shdow-soft">{card.button}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;