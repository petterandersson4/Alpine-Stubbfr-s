import React from "react";
import "./Stubbfras.css";

const data = [
  { name: "Vikt", value: "34 kg"},
  { name: "Längd", value: "175 cm"},
  { name: "Bredd", value: "53 cm"},
  { name: "Fräsdjup", value: "+50 cm"},
  { name: "Husqvarna 3120XP", value: "8,4 hk"},
  { name: "Stihl MS880", value: "8,7 hk"},
  { name: "Remdriven", value: ""},
  { name: "Fräständer", value: "6 st"},
]

const Stubbfras = () => {
  return <main id="mainContent">
    <div></div>
    <img src = "images/frasBAR1.jpg" width={"100%"} alt="backround"></img>
    <div className="container">
      <div className="row justify-content-Left mt-1 p-3">
        <h5><b>Alpine Magnum Stubbfräs</b></h5>
        <p>Vår bärbara stubbfräs som matchar fräshastigheten hos betydligt större maskiner till ca 1/3 av kostnaden. Maskinen är framtagen helt i aluminium och finns med 2 olika motoralternativ, Husqvarna 3120 XP och Stihl MS880. Marknadens mest prisvärda stubbfräs vågar vi sticka ut hakan och säga. Perfekt för dig som vill börja med stubbfräsning, är trädfällare och själv vill ta hand om dina stubbar eller för det etablerade stubbfräsföretaget som vill utöka sin flexibilitet eller på ett snabbt och smidigt sätt ta sig till stubbarna.</p>

        <main id="Main-Content">
          <div className="Container">
              <div><b>Fördelar</b></div>
              
              <ul className="p-3">
                <li>Fräshastigheten, otroligt effektiv för att vara en så liten maskin</li>
                <li>Låga underhålls och driftskostnader</li>
                <li>Kan fräsa nära väggar, plattor eller annat man är rädd om utan att förstöra omgivningen</li>
                <li>Bärbar, enkel att ta med både uppför trappor och genom smala passager/dörrar samt att lasta i bilen</li>
              </ul>
               

              <div><b>Specifikationer</b></div>
              <p className="tabel">
              <table>
              {data.map((val, key) => {
              return (
              <tr key={key}>
              <td><a style={{color: "white"}}>_</a>{val.name}</td>
              <td>{val.value}</td>
              </tr>
              )
              })}
              </table>
              </p>
              <a style={{color: "white"}}>.</a>

              <p>Kontakta oss gärna för offert eller andra frågor.</p>   
              <div className="row justify-content-center mt-1 p-2"> 
              <img src = "images/fras.jpg" width={400} alt="backround"></img> 
              <a style={{color: "white"}}>_____________</a>
              <img src = "images/action.jpg" width={400} alt="backround"></img> 
              </div>
              <div style={{color: "white" }}>.</div>
              <div style={{color: "white" }}>.</div>

          </div>
        </main>
      </div>
    </div>
  </main>
}
export default Stubbfras;
