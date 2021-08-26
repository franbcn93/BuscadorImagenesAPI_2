import React, { useState } from "react";
import { Error } from "./Error";
import { Opciones } from "./Opciones";

export const Formulario = ({
  guardarBusqueda,
  guardarImgPorPagina,
  guardarFormato,
}) => {
  const [termino, guardarTermino] = useState("");

  const [error, guardarError] = useState(false);

  const [paginas, guardarPaginas] = useState(1);

  const [categoria, guardarCategoria] = useState("");

  const buscarImagenes = (e) => {
    e.preventDefault();

    // Comprobar si el número pasado es un entero
    const cambioEntero = parseInt(paginas);

    //   Validar el termino de búsqueda
    if (
      termino.trim() === "" ||
      paginas.trim() === "" ||
      isNaN(cambioEntero) ||
      categoria.trim() === ""
    ) {
      guardarError(true);
      return;
    }

    guardarError(false);
    //   Enviar el termino de búsqueda hacia el componente principal
    guardarBusqueda(termino);
    // Enviar el número de iágenes por página
    guardarImgPorPagina(parseInt(paginas));
    // Enviar la opción escogida de formato
    guardarFormato(categoria);
  };
  return (
    <>
      <Opciones guardarCategoria={guardarCategoria} />
      <form action="" onSubmit={buscarImagenes}>
        <div className="row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca una imagen, ejemplo: Futbol o café"
              onChange={(e) => guardarTermino(e.target.value)}
              style={{ textAlign: "center" }}
              onFocus={(e) => (e.target.placeholder = "")}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="
            Imagenes que salgan por página? Ejemplo:   30"
              onChange={(e) => guardarPaginas(e.target.value)}
              style={{ textAlign: "center" }}
              onFocus={(e) => (e.target.placeholder = "")}
            />
          </div>
          <div className="col-4"></div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar"
            />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row"></div>
        {error ? (
          <Error mensaje="Agrega formato, término de búsqueda y cantidad de imagenes para ver en la misma página" />
        ) : null}
      </form>
    </>
  );
};
