import Image from "next/image";
import Styles from "../styles/portfolio.module.css"

const PortfolioCard = ({ title, imageUrl}) => {
  return (
    <div className="card" style="width: 18rem;">
       
      <Image src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
      
        <h5 className={Styles.title}>{title}</h5>
        
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;