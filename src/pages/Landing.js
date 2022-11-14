import React, { useState , useEffect} from 'react'
import {FaAngleLeft, FaAngleRight } from "react-icons/fa"
import middle from "./../images/middle.PNG";

export default function Landing() {
  const [stage, setStage] = useState(0);
    console.log('here?');
    function doLeftClick (){
      console.log('doLeft');
    }
    function doRightClick () {
      console.log('doRight');
    }
    useEffect(() => {
  //    setNavbarShowing(true);
//      setLoading(true);
    }, [stage]);
  
    return (
      <main id="Main">
        <article data-index="0" data-status="active">
          <div className ="article-image-section article-section"> 
            <img src={middle} id="landImg"/>
          </div>
          <div className ="article-description-section article-section"> 
          <p> lorem stuff</p>
          </div>
          <div className ="article-title-section article-section">
            <h1>fdsaf MIDDLE WHERE HERE1</h1>
             </div>
          <div className ="article-nav-section article-section"> 
            <FaAngleLeft className="navArrow"  onClick={doLeftClick} />
            <FaAngleRight className="navArrow"  onClick={doRightClick} />
          </div>
        </article>
        <article data-index="1"  data-status="inactive">
          <div className ="article-image-section article-section"> 
            <img src={middle} id="landImg"/>
          </div>
          <div className ="article-description-section article-section"> 
          <p> lorem stuff</p>
          </div>
          <div className ="article-title-section article-section">
            <h1> FI WHERE HERE</h1>
             </div>
          <div className ="article-nav-section article-section"> 
            <FaAngleLeft className="navArrow"  onClick={doLeftClick} />
            <FaAngleRight className="navArrow"  onClick={doRightClick}  />
          </div>
        </article>
        <article data-index="2"  data-status="inactive">
          <div className ="article-image-section article-section"> 
            <img src={middle} id="landImg"/>
          </div>
          <div className ="article-description-section article-section"> 
          <p> lorem stuff</p>
          </div>
          <div className ="article-title-section article-section">
            <h1> WERE WHERE HERE2</h1>
             </div>
          <div className ="article-nav-section article-section"> 
            <FaAngleLeft className="navArrow"  onClick={doLeftClick} />
            <FaAngleRight className="navArrow"  onClick={doRightClick} />
          </div>
        </article>
        <article data-index="3"  data-status="inactive">
          <div className ="article-image-section article-section"> 
            <img src={middle} id="landImg"/>
          </div>
          <div className ="article-description-section article-section"> 
          <p> lorem stuff</p>
          </div>
          <div className ="article-title-section article-section">
            <h1> FDSF WHERE HERE3</h1>
             </div>
          <div className ="article-nav-section article-section"> 
            <FaAngleLeft className="navArrow" onClick={doLeftClick} />
            <FaAngleRight className="navArrow" onClick={doRightClick} />
          </div>
        </article>
        main
      </main>
    )
}
