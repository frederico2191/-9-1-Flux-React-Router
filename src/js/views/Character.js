
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card";
import injectContext, { Context } from "../store/appContext";
import { AiOutlineHeart } from 'react-icons/ai';



export const Character = () => {
  const params = useParams()

  console.log('params', params)

  return console.log("i am the charactrer")
}
