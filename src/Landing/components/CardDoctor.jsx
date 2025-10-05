import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "../styles/Doctors.css";
const CardDoctor = ({ img, score, name, specialty, description, profile }) => {
  return (
    <>
      <div className="card-doctor">
        <div className="card-doctor-photo">
          <img src={img} alt="Doctor" className="doctor-image" />
          <span>
            <StarBorderIcon /> {score}
          </span>
        </div>
        <div className="card-doctor-info">
          <h3>{name}</h3>
          <h4>{specialty}</h4>
          <p>{description}</p>
        </div>
        <button>
          <Link to={profile} className="link-profile">
            Ver Perfil
          </Link>
        </button>
      </div>
    </>
  );
};
export default CardDoctor;
