import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate();
  
  
  return (
    <>
    
    <div className="main">
        <div className="page1">
          <h1>MUSTANG 1964</h1>
          <div className="top">
            <div className="header container">
              <div className="logo">
                <h2>thunder<span>garage</span></h2>
              </div>
              <div className="navlinks">
                <span>
                  <li><a >Home</a></li>
                  <li><a  onClick={()=>navigate("/vehicals")}>Vehicles</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Support</a></li>
                </span>
              </div>
              <div className="ham">
                <a href="#" className="btn">Join</a>
              </div>
            </div>
            <div className="content">
              <h2>first generation</h2>
              <h3>Ford Mustang 1964</h3>
            </div>
            <div className="mustang">
              <span>G</span>
              <span>N</span>
              <span>A</span>
              <span>T</span>
              <span>S</span>
              <span>U</span>
              <span>M</span>
              <span> </span>
              <span style={{ color: '#ecfffd' }}>D</span>
              <span style={{ color: '#ecfffd' }}>R</span>
              <span style={{ color: '#ecfffd' }}>O</span>
              <span style={{ color: '#ecfffd' }}>F</span>
            </div>
          </div>
          <div className="bottom">
            <div className="image">
                <img  src='https://github.com/thundercoding07/Mustang-Website-Landing-page/blob/main/2.png?raw=true'/>
            </div>
            <div className="bottom-content">
              <a href="#" className="btn btn-primary">Purchase</a>
            </div>
            <div className="specification">
              <span>V8 engine |</span>
              <span>60 miles per hour |</span>
              <span>built 25,517 GTs |</span>
              <span>289 HiPo</span>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Home
