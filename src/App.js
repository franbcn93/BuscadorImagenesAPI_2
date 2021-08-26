import React, { useState, useEffect } from "react";
import { Formulario } from "./components/Formulario";
import { ListadoImagenes } from "./components/ListadoImagenes";
import ApiKey from "./components/Key";
import "./App.css";

function App() {
  // 22202337-b0f442014c0e2e362de8cb41e
  // State de la app
  const [busqueda, guardarBusqueda] = useState("");
  const [formato, guardarFormato] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [imgPorPagina, guardarImgPorPagina] = useState(1);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarAPI = async () => {
      // if (categoria === "") return;

      if (busqueda === "") return;

      // const imagenesPorPagina = 30;
      const key = ApiKey.myKey;
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
      guardarImagenes(resultado.hits);

      console.log(formato);

      // console.log(imgPorPagina);

      // Calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(
        resultado.totalHits / imgPorPagina
      );
      guardarTotalPaginas(calcularTotalPaginas);

      // Mover pantalla hacia arriba
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultarAPI();
  }, [busqueda, paginaActual, imgPorPagina, formato]);

  // Definir la pagina Anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;

    if (nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  };

  // Definir la página siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if (nuevaPaginaActual > totalPaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="container" style={{ paddingTop: "30px" }}>
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        {/* <Opciones guardarCategoria={guardarCategoria} /> */}
        <Formulario
          // guardarCategoria={guardarCategoria}
          guardarBusqueda={guardarBusqueda}
          guardarImgPorPagina={guardarImgPorPagina}
          guardarFormato={guardarFormato}
        />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />
        {paginaActual === 1 ? null : (
          <button
            type="button"
            className=" paginaActual"
            onClick={paginaAnterior}
          >
            &laquo; Anterior{" "}
          </button>
        )}

        {paginaActual === totalPaginas ? null : (
          <button
            type="button"
            className=" paginaActual"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
