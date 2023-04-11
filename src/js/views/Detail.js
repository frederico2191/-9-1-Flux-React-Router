
import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card";
import injectContext, { Context } from "../store/appContext";
import { AiOutlineHeart } from 'react-icons/ai';
import UpperDetail from "../component/UpperDetail.jsx";


const Detail = () => {
    const { store, actions} = useContext(Context);
    const {pathname}= useLocation()
    const [ , type, typeImg, id] = pathname.split("/")
    useEffect(() => {
      actions.fetchDetail({type, id});
    }, [type, id]);
    
    console.log("i am the type", type)
    if(type=="people") {
      return (
        <div>
            <UpperDetail/>
            <div className="row justify-content-center">
              <div className="col-2 text-danger ">
                <p>Birth Year</p>
                <p>{store.detail.birth_year}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Eye Color</p>
                <p>{store.detail.eye_color}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Gender</p>
                <p>{store.detail.gender}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Height</p>
                <p>{store.detail.height}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Mass</p>
                <p>{store.detail.mass}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Skin Color</p>
                <p>{store.detail.skin_color}</p>
              </div>
            
            </div>
        </div>
      )
    }
    else if (type=="planets") {
      return (
        <div>
            <UpperDetail/>
            <div className="row justify-content-center">
              <div className="col-2 text-danger ">
                <p>Diameter</p>
                <p>{store.detail.diameter}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Rotation Period</p>
                <p>{store.detail.rotation_period}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Orbital Period</p>
                <p>{store.detail.orbital_period}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Gravity</p>
                <p>{store.detail.gravity}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Population</p>
                <p>{store.detail.population}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Climate</p>
                <p>{store.detail.climate}</p>
              </div>
            </div>
        </div>
      )
    }
    else if (type=="vehicles") {
      return (
        <div>
            <UpperDetail/>
            <div className="row justify-content-center">
              <div className="col-2 text-danger ">
                <p>Model</p>
                <p>{store.detail.model}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Manufacturer</p>
                <p>{store.detail.manufacturer}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Passengers</p>
                <p>{store.detail.passengers}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Crew</p>
                <p>{store.detail.crew}</p>
              </div>
              <div className="col-2 text-danger">
                <p>Cargo Capacity</p>
                <p>{store.detail.cargo_capacity}</p>
              </div>
            </div>
        </div>
      )
    }
  }
export default Detail