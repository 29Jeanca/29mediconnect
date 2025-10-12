import { useState } from "react";
import SearchBar from "./SeachBar";
import "../styles/Doctors.css";
import CardDoctor from "./CardDoctor";
import Pagination from "@mui/material/Pagination";

const DoctorsInfo = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Juan Pérez",
      specialty: "Cardiología",
      score: 4.8,
      img: "../src/Landing/imgs/doc1.jpg",
      description:
        "Especialista en enfermedades del corazón con más de 10 años de experiencia.",
      profile: "/doctor/1",
    },
    {
      id: 2,
      name: "Dra. María Gómez",
      specialty: "Pediatría",
      score: 4.6,
      img: "../src/Landing/imgs/doc1.jpg",
      description:
        "Atención integral para niños y adolescentes, enfocada en su bienestar.",
      profile: "/doctor/2",
    },
    {
      id: 3,
      name: "Dr. Carlos Rodríguez",
      specialty: "Dermatología",
      score: 4.7,
      img: "../src/Landing/imgs/doc1.jpg",
      description:
        "Tratamiento de enfermedades de la piel con un enfoque personalizado.",
      profile: "/doctor/3",
    },
    {
      id: 4,
      name: "Dra. Ana Martínez",
      specialty: "Neurología",
      score: 4.9,
      img: "../src/Landing/imgs/doc1.jpg",
      description:
        "Experta en trastornos neurológicos y cuidado del sistema nervioso.",
      profile: "/doctor/4",
    },
  ];

  const [page, setPage] = useState(1);
  const doctorsPerPage = 4;

  const [tempTerm, setTempTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event, value) => {
    setPage(value);
  };

  const filteredDoctors = doctors.filter((doctor) =>
    `${doctor.name} ${doctor.specialty}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const indexOfLastDoctor = page * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor
  );

  return (
    <>
      <div className="doctors-info-text">
        <h3>Encuentra a tu Doctor Ideal</h3>
        <p>
          Busca entre cientos de especialistas calificados y encuentra el cuidado que necesitas
        </p>
      </div>

      <div>
        <SearchBar
          term={tempTerm}
          onTermChange={setTempTerm}
          onSearch={() => setSearchTerm(tempTerm)}
        />
      </div>

      <div className="doctors-cards-container">
        {currentDoctors.length > 0 ? (
          currentDoctors.map((doctor) => (
            <CardDoctor
              key={doctor.id}
              img={doctor.img}
              score={doctor.score}
              name={doctor.name}
              specialty={doctor.specialty}
              description={doctor.description}
              profile={doctor.profile}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%", marginTop: "1rem" }}>
            No se encontraron resultados.
          </p>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <Pagination
          count={Math.ceil(filteredDoctors.length / doctorsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </>
  );
};

export default DoctorsInfo;
