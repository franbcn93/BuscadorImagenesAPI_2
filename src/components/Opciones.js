import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const Opciones = ({ guardarCategoria }) => {
  //   const [busqueda, guardarBusqueda] = useState({
  //     categoria: "",
  //   });

  const [busqueda, guardarBusqueda] = useState({ categoria: "" });

  const OpcionesCat = [
    "",
    "Fotos",
    "Ilustraciones",
    "Vectores",
    "Videos",
    "Música",
  ];

  // Función para leer los contenidos
  const obtenerCategoria = (e) => {
    // guardarCategoria(busqueda);
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });

    guardarCategoria(e.target.value);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}>
            <h5>Escoge el formato:</h5>
          </Col>
          <Col sm={8} className="options">
            <Form.Select size="lg" name="categoria" onChange={obtenerCategoria}>
              {OpcionesCat.map((res) => (
                <option key={res} value={res}>
                  {res}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
