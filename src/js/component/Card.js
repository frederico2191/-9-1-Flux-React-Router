import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import exampleImage from "./exampleImage.png"
import { AiOutlineHeart } from 'react-icons/ai';
import { Context } from "../store/appContext";



const Card = ({name,id}) => {
  const { store, actions } = useContext(Context);


  return (
    <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={exampleImage} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {/* <a href="" className="btn btn-primary">Go somewhere</a> */}
            <div className="d-flex justify-content-between">
              <Link to={"/character/" + id}>
                <button className="btn btn-outline-primary">Learn More</button>
              </Link>
              <button className="btn btn-outline-warning" onClick={() => actions.toggleFavourite(id)}><AiOutlineHeart/></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card