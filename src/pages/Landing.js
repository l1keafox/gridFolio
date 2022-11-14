import React, { useState , useEffect,createRef} from 'react'
import {FaAngleLeft, FaAngleRight } from "react-icons/fa"
import middle from "./../images/middle.PNG";

const Portfolios = [
  {
    title: "Professional Portfolio",
    description:
      "This website! I made this from scratch using React, Material UI, tailwind and headless ui.",
    img: middle,
    repoLink: "https://github.com/l1keafox/reactFolio",
    deployLink: "https://l1keafox.github.io/reactFolio/",
  },

  {
    title: "Bubble Dungeonz",
    description:
      "A platform for game developers to host multi/single player games to interact with other users. Features a multiplayer bubble popping game, saved chat groups and customized display settings",
    img: middle,
    repoLink: "https://github.com/l1keafox/bubbleDungeonz",
    deployLink: "https://bubbledungeonz.herokuapp.com/",
  },

  {
    title: "Middle-Where",
    description:
      "A web app to find a centralized location for a group of friends. Users can create accounts and login, using google maps to display location of friends and the central meeting spot. This was my second group project of six people, I conceived the idea and pushed for MVP",
    img: middle,
    repoLink: "https://github.com/l1keafox/middleWhere",
    deployLink: "https://limitless-temple-38712.herokuapp.com/",
  },
  {
    title: "RealTimeCommodities",
    description:
      "My first group project, taking 5 people to make. It is a web app that will pull commodities news/prices through an API call. Uses google graphs to show history of commodity prices.",
    img: middle,
    repoLink: "https://github.com/l1keafox/RealTimeCommodities",
    deployLink: "https://l1keafox.github.io/RealTimeCommodities/",
  },
  {
    title: "Weather DashBoard",
    description:
      "An web app just made with the front end with bootstrap, jquery and openweathermap.org for the api. It will take in cities and forecast 5 days in the future ",
    img: middle,
    repoLink: "https://github.com/l1keafox/weatherDashboard",
    deployLink: "https://l1keafox.github.io/weatherDashboard/",
  },
  {
    title: "Team maker",
    description:
      "A node.js application that uses inquire to ask question in the command line. Afterwards it will create an html page of the team you have entered in. ",
    img: middle,
    repoLink: "https://github.com/l1keafox/myTeamSetting",
    deployLink: "https://l1keafox.github.io/myTeamSetting/",
  },
];


export default function Landing() {
  const [stage, setStage] = useState(0);
    console.log('here?');
    function doLeftClick (){
      console.log('doLeft');
    }
    function doRightClick () {
      console.log('doRight');
    }
    const testref = createRef();
    useEffect(() => {
  //    setNavbarShowing(true);
//      setLoading(true);
//let arts = getElementsByClassName('art');
// let arts = ReactDOM.findDOMNode(<main>).getElementsByClassName('art');
      console.log(testref.current);
    }, []);
    return (
      <main id="Main">
        <article data-index="0" data-status="active" ref={testref}>
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
        <article data-index="1"  data-status="inactive"   ref={testref}>
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
        <article data-index="2"  data-status="inactive"  ref={testref}>
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
        <article data-index="3"  data-status="inactive"   ref={testref}>
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
