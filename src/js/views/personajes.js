import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/personajes.css";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Personajes = () => {
  const { store, actions } = useContext(Context);
  const { navigate } = useNavigate();
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    
    responsive: [
      {breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }},
      {breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }}
    ]
  };
  
  
 
  return (
    <div>
      <h1 className="tittle">Personajes</h1>
      
      <Slider {...settings} style={{"width":"90%", "margin":"auto"}}>
        {store.personajes.map((item, index) => {
         
          return (
            <div className="contain" key={index}>
              <div className="card" style={{"height":"100%"}}>
                <img
                  className="card-img-top"
                  
                  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                  alt="..."
                />
                <div className="card-body d-flex justify-content-evenly">
                <Link to={`/personajeEspecifico/${item.uid}`}>
                  <h3>{item.name}</h3>
                </Link>
                <i className="fa-solid fa-heart me-3" onClick={() => actions.agregarFavoritos(item.name)}
                  ></i>
                </div>
                          
                   
              </div>
            </div>
          );
        })}
         </Slider>
      </div>
   
  );
};

