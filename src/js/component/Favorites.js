import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'
import { TfiTrash } from 'react-icons/tfi';

const Favorites = () => {
    const { store, actions } = useContext(Context)
  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle btn-primary text-white rounded mx-3" role="button" data-bs-toggle="dropdown">
          Favorites
        </a>
        <ul className="dropdown-menu">
          {store.favorites.map((favorite, index) => (
            <li className="d-flex flex-row" key={index.toString()}>
              <Link className="dropdown-item" to={`${favorite.type}/${favorite.uid}`}>
                {favorite.name}
              </Link>
              <TfiTrash onClick={() => actions.toggleFavourite(favorite)}/>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default Favorites