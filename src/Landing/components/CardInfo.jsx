import '../styles/Info.css'

const CardInfoLanding = ({ title, description,icon }) => {
    return (
        <>
            <div className="card-landing">
                <div className="icon-card-landing">
                    <img src={icon} alt="Icon" />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </>
    )
}
export default CardInfoLanding