import React from 'react'
import { Link } from "react-router-dom";


const Card = ({name,id}) => {
  return (
    <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {/* <a href="" className="btn btn-primary">Go somewhere</a> */}
            <Link to={"/single/" + id}>
              <button className="btn btn-outline-primary">Learn More</button>
							</Link>
          </div>
        </div>
    </div>
  )
}

export default Card