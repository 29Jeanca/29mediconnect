import '../styles/Services.css'
import CardServicesInfo from "./CardServices";
const ServicesInfoLanding = () =>{
        const servicesList = [
        {
            img: "src/Landing/imgs/servicesIcon1.png",
            title: 'Teleconsultas',
            description: 'Consulta con medicos especialistas desde la comodidad de tu hogar.',
            url: '/teleconsultas',
            urlText: 'Mas informacion'
        },
        {
            img: "src/Landing/imgs/servicesIcon2.png",
            title: 'Citas Presenciales',
            description: 'Agenda citas en clinicas y hospitales asociados con facilidad.',
            url: '/citas',
            urlText: 'Agendar ahora'
        },
        {
            img: "src/Landing/imgs/cardIcon3.png",
            title: 'Expediente Digital',
            description: 'Accede a tu historial medico completo de forma segura y en linea.',
            url: '/expediente',
            urlText: 'Ver mi expediente'
        },
        {
            img: "src/Landing/imgs/servicesIcon4.png",
            title: 'Foros de Salud',
            description: 'Participa en discusiones sobre salud con otros usuarios y profesionales.',
            url: '/foros',
            urlText: 'Unirse a la comunidad'
        }
    ]
    return(
        <>
            <div className="header-services-info-landing">
                <h3>Nuestros Servicios Medicos</h3>
                <p>MediConnect ofrece una amplia gama de servicios medicos para satisfacer tus necesidades de salud. Explora nuestras opciones y encuentra la mejor solucion para ti</p>
            </div>
            <section className="section-services-info-landing">
                   <div className="services-info-landing">
                {servicesList.map((service)=>{
                    return(
                        <CardServicesInfo
                            img={service.img}
                            title={service.title}
                            description={service.description}
                            url={service.url}
                            urlText={service.urlText}
                        />
                    )
                })}
                </div>

            </section>
        </>
    )
}
export default ServicesInfoLanding;