import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Context } from "../store/appContext";



const Card = ({ className, item, category }) => {
  const { actions, store } = useContext(Context);
  const handleToggleFavorite = () => actions.toggleFavourite(item)
  const isFavorite = store.favorites.find(el => el.name === item.name)

  const addImageFallback = (event) => {
    event.currentTarget.src = "./fallback.png"
  };



  return (
    <div /**className={className}*/>
        <div className="card" style={{ width: '18rem' }}>
          <img src={`https://starwars-visualguide.com/assets/img/${category}/${item.uid}.jpg`} className="card-img-top" onError={addImageFallback}></img>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <div className="d-flex justify-content-between">
              <Link to={`/${item.type}/${item.typeImg}/${item.uid}`}>
                <button className="btn btn-outline-primary">Learn More</button>
              </Link>
              <button className="btn btn-outline-warning" onClick={handleToggleFavorite}>
                {isFavorite ? <AiFillHeart/> : <AiOutlineHeart/>}
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card