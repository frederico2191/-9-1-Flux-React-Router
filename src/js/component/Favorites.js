import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'
import { TfiTrash } from 'react-icons/tfi';


const Favorites = () => {
    const { store, actions } = useContext(Context)
    const favoritesExist = store.favoriteCounter>0

  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle btn-primary text-white rounded mx-2 px-2 favorites-collapsed" role="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
          Favorites { favoritesExist && store.favoriteCounter}
        </a>
        
        <ul className="dropdown-menu">
          {!favoritesExist? <li className='px-2'>No favorites to show</li> : store.favorites.map((favorite, index) => (
            <li className="d-flex flex-row" key={index.toString()}>
              <Link className="dropdown-item" to={`${favorite.type}/${favorite.typeImg}/${favorite.uid}`}>
                {favorite.name}
              </Link>
              <TfiTrash onClick={() => actions.toggleFavourite(favorite)}/>
            </li>
          ))}
        </ul>
        <ul className="dropdown-menu">
          {store.favorites.map((favorite, index) => (
            <li className="d-flex flex-row" key={index.toString()}>
              <Link className="dropdown-item" to={`${favorite.type}/${favorite.typeImg}/${favorite.uid}`}>
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