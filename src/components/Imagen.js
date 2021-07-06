import React from "react";
import imagenLike from "../images/like.png";
import view from "../images/views.png";
import download from "../images/download.png";

export const Imagen = ({ imagen }) => {
  // extraer las variables
  const { largeImageURL, likes, previewURL, tags, views, downloads } = imagen;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img
          src={previewURL}
          alt={tags}
          className="card-img-top"
          style={{ height: "151px" }}
        />

        <div className="card-body">
          <p className="card-text">
            {likes}{" "}
            <img
              src={imagenLike}
              alt={tags}
              style={{
                height: "24px",
                float: "right",
              }}
            />
          </p>
          <p className="card-text">
            {downloads}{" "}
            <img
              src={download}
              alt={tags}
              style={{
                height: "24px",
                float: "right",
              }}
            />
          </p>
          <p className="card-text">
            {views}{" "}
            <img
              src={view}
              alt={tags}
              style={{
                height: "24px",
                float: "right",
              }}
            />
          </p>
        </div>

        <div className="card-footer">
          <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};
