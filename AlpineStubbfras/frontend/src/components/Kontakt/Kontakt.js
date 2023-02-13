import React from "react";
//import styles from "./Kontakt.module.css";


const Kontakt = () => {
  return <main id="mainContent">
    <div className="container">
      <div className="row justify-content-left mt-3 p-3">
        <h3><b>Kontakt</b></h3>
      </div>
        <h6><div><b>Munka Stubbfräs</b></div></h6>
        <div>Johan Andersson</div>
        <div>Sjöbackavägen 26</div>
        <div>266 92 Munka-ljungby</div>
        <div>Tel <a href="tel:+46705787776" style={{color: "#00AA81"}}>0705-78 77 76</a> </div>
        <div><a href={"mailto:johan@munkastubbfras.se"} style={{color: "#00AA81"}}>johan@munkastubbfras.se</a></div>
      
        <div style={{color: 'white' }}>.</div>
        
        <main id="mainContent">
       <div className="container">
       <div className="row justify-content-left mt-0 p-0">
        <img src = "images/kontakt-bild.jpg" width={300} alt=""></img>
        <a style={{color: "white" }}>__________</a>
        <img  src = "images/logga.png" width={150} height={150}  alt=""></img>
        </div>
        </div>
        </main>
        <div style={{color: 'white' }}>.</div>
        <div style={{color: 'white' }}>.</div>
        <div style={{color: "white" }}>.</div>

    </div>
  </main>
}
export default Kontakt;
