import { Link } from "react-router-dom";
import '../styles/Services.css'

const CardServicesInfo = ({img,title,description,url,urlText}) =>{
    return(
        <>
            <div className="card-services-landing">
                <div className="img-card-services-landing">
                    <img src={img} alt="" />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                <Link to={url} className="link-card-services-landing">{urlText}</Link>
            </div>
        </>
    )
}
export default CardServicesInfo;