import React, {useRef, useEffect} from 'react';
import {TweenMax, Power3} from 'gsap';

/* IMPORT ASSETS */
import menu from './assets/menu.svg';
import search from './assets/search.svg';
import arrowUp from './assets/arrowUp.svg';
import arrowDown from './assets/arrowDown.svg';

/* STYLE */
import './App.scss';

function App() {

  /* ASSIGNATION */
  let bg = useRef(null);
  let navbar = useRef(null);
  let scrolldown = useRef(null);
  let bottomnav = useRef(null);

  /* ANIMATION */
  useEffect(() => {
    TweenMax.to(bg, 2, {
      width:'100%',
      ease : Power3.easeInOut
    })
    TweenMax.from(navbar,1.5,{
      delay:2.5,
      opacity: 0,
      y:20,
      ease: Power3.easeInOut
    })
    TweenMax.from(".media ul li", 1.5, {
      delay: 2.8,
      opacity: 0,
      x: -30,
      ease: Power3.easeInOut
    }, 0.08)
    TweenMax.from(".text h1 .hidetext", 1.5,{
      delay:1.6,
      y:"100%",
      ease: Power3.easeInOut
    })
    TweenMax.from(".text p .hidetext", 1.5,{
      delay: 2,
      y: "100%",
      ease: Power3.easeInOut
    })
    TweenMax.from(".desc ul li", 1.5, {
      delay: 2,
      opacity: 0,
      y: 20,
      ease: Power3.easeInOut
    }, 0.1)
    TweenMax.from(".desc p", 1.5, {
      delay:2.3,
      opacity:0,
      y: 20,
      ease: Power3.easeInOut
    })
    TweenMax.from(scrolldown, 1.5, {
      delay:2.7,
      opacity:0,
      y: 200,
      ease: Power3.easeInOut
    })
    TweenMax.from(bottomnav, 1.5, {
      delay: 3.2,
      opacity:0,
      y: 30,
      ease: Power3.easeInOut
    })
    TweenMax.from(".bottomnav .next",1,{
      delay: 3.5,
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    })
    
  })

  return (
    <div className="wrapper">
      <div className="bg" ref={ el => bg = el}>

        {/* NAV BAR */}
        <nav className="navbar" ref={ el => navbar = el}>
          <div className="title">lookbook</div>
          <div className="categories">
            <ul>
              <li>man</li>
              <li>women</li>
            </ul>
          </div>
          <div className="menu">
            <img src={menu} alt="menu" />
          </div>
          <div className="search">
            <img src={search} alt="search" />
          </div>
        </nav>

        {/* SOCIAL MEDIA */}
        <div className="media">
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        {/* IMAGES */}
        <div className="img-wrapper01">
          <div className="img01"></div>
          <div className="block"></div>
        </div>
        <div className="img-wrapper02">
          <div className="img02"></div>
          <div className="block"></div>
        </div>

        {/* TEXT */}
        <div className="text">
          <h1>
            <span className="hidetext">The Great Escape</span>
          </h1>
          <p>
            <span className="hidetext">Issue two out now</span>
          </p>
        </div>

        {/* DESC */}
        <div className="desc">
          <ul>
            <li>Volume 01</li>
            <li>Volume 02</li>
          </ul>
          <p>A fashion insight into leading summer styles, travel destinations to may never of thought of, a beginners guide
            to SM and much much more.</p>
        </div>

        {/* SCROLLDOWN */}
        <div className="scrolldown" ref={ el => scrolldown = el}>scroll down</div>

        {/* BOTTOMNAV */}
        <div className="bottomnav" ref={ el => bottomnav = el}>
          <div className="next">up next</div>
          <div className="nav">
            <ul>
              <li>
                <img src={arrowUp} alt="arrowUp" />
              </li>
              <li>
                <img src={arrowDown} alt="arrowDown" />
              </li>
            </ul>
            <div className="bottomnav-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
