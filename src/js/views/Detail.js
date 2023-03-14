
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card";
import injectContext, { Context } from "../store/appContext";
import { AiOutlineHeart } from 'react-icons/ai';


const Detail = () => {
    const { store, actions} = useContext(Context);
    const params = useParams()
    actions.

  return (
    <div>
        <h1>
            Detail!!! {params.id}
        </h1>
    </div>
  )
}

export default Detail