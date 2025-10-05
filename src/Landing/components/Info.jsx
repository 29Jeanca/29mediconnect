import CardInfoLanding from "./CardInfo";
import '../styles/Info.css'
const InfoLanding = () => {
const cards = [
  {
    title: 'Consulta con doctores certificados',
    description: 'Conecta con profesionales de la salud calificados desde cualquier lugar',
    icon: 'src/Landing/imgs/cardIcon1.png',
  },
  {
    title: "Agenda tus citas en segundos",
    description: "Programa tus citas de forma rapida y sencilla",
    icon: "src/Landing/imgs/cardIcon2.png",
  },
  {
    title: 'Accede a tu historial clinico digital',
    description: 'Manten un registro completo y seguro de tu informacion medica',
    icon: 'src/Landing/imgs/cardIcon3.png',
  }
];


  return (
    <>
      <div className="info-landing">
        <h3>Funcionalidades clave</h3>
        <p>Descubre como MediConnect simplifica la gestion de tu salud</p>
      </div>
        <div className="cards-landing">
            {cards.map((card)=>{
                return(
                    <CardInfoLanding
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    />
                )
            })}
        </div>
    </>
  );
};
export default InfoLanding;
