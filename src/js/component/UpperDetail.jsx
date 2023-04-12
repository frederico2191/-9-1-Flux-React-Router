
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";


const UpperDetail = () => {
    const { store, actions} = useContext(Context);
    const {pathname}= useLocation()
    const [ , type, typeImg, id] = pathname.split("/")
    useEffect(() => {
      actions.fetchDetail({type, id});
    }, [type, id]);
    
    console.log("i am the type", type)
      return (
        <div>
            <div className="container d-flex row mx-5 my-5 col-12">
              <div className="col-6 w-auto">
                <img className="img-fluid" src={`https://starwars-visualguide.com/assets/img/${typeImg}/${id}.jpg`} alt="Image"></img>
              </div>
              <div className="col-6">
                <h1>
                  {store.detail.name}
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi quis. Commodo nulla facilisi nullam vehicula ipsum. Proin nibh nisl condimentum id venenatis a. Blandit libero volutpat sed cras ornare arcu dui vivamus. Morbi non arcu risus quis. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Id consectetur purus ut faucibus pulvinar. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Laoreet id donec ultrices tincidunt arcu. Eu turpis egestas pretium aenean pharetra magna. Facilisis magna etiam tempor orci eu lobortis. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Senectus et netus et malesuada fames ac. Enim nulla aliquet porttitor lacus luctus accumsan. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Ultricies lacus sed turpis tincidunt id. Lacinia quis vel eros donec ac odio.</p>     
              </div>
            </div>
        </div>
      )
  }
export default UpperDetail