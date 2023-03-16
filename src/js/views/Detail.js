
import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card";
import injectContext, { Context } from "../store/appContext";
import { AiOutlineHeart } from 'react-icons/ai';


const Detail = () => {
    const { store, actions} = useContext(Context);
    const {pathname}= useLocation()
    const [, type, id] = pathname.split("/")
    useEffect(() => {
      console.log(actions.fetchDetail, "I am the fetched detail")
      actions.fetchDetail({type, id});
    }, [type, id]);

    


  return (
    <div>
        <h1>
          {store.detail.name}
        </h1>
        
        <div className="container text-center">
  <div className="row justify-content-start">
    <div className="col-6">
      One of two columns
    </div>
    <div className="col-6">
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-2">
      One of two columns
    </div>
    <div className="col-2">
      One of two columns
    </div>
  </div>
</div>




    </div>
  )
}

export default Detail