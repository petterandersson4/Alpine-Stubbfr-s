import React from "react";

const Frashjul = () => {
  return <main id="mainContent">
        <img src = "images/rhinoBAR1.jpg" width={"100%"}  alt=""></img>
    <div className="container">
      <div className="row justify-content-Left mt-1 p-3">
        <h5><b>Alpine Rhino Fräshjul</b></h5>

        <main id="Main-Content">
          <div className="Container">
            
            <p>Marknadsledande stubbfräshjul som väsentligt förändrar din lönsamhet. Fräshjulet är framtaget för att förbättra din maskins kapacitet och hållbarhet. Det finns en mängd fördelar med detta fräshjul, det fräser snabbare, kostar mindre och håller längre. Det finns till alla stubbfräsar på marknaden och kan även specialbeställas med just dina mått och ditt bultmönster ifall du bygger en egen maskin tex.</p>
            <div style={{color:'white'}}>.</div>
            <div><b>Fördelar med att använda Rhino fräshjul</b></div>
            
           
            <ul className="p-3">
              <li>Enkelt att byta fräständer, 1 min per tand</li>
              <li>Hållare och bultar sitter helt i skydd bakom tanden, vilket även gör att det inte tar kraft från maskinen som ett fräshjul med hållare som sliter med redan frästa spån</li>
              <li>Välbalanserat fräshjul som minskar vibrationerna i maskinen och därav gör att maskinen håller bättre</li>
              <li>Färre antal fräständer på hjulet vilket gör att det blir en lägre kostnad på det som slits, i de flesta fall sitter endast 4-8 tänder på hjulet istället för 16-32, kunder uppger en halverad kostnad för fräständer/hållare med detta system</li>
              <li>Fräständerna kan slipas och användas igen</li>
              <li>Fräshastigheten ökar med 30-50% beroende på vilken maskin du har idag. Detta gör också att din stubbfräs inte behöver gå så många timmar för att fräsa bort x antal stubbar, och ökar således livslängden på maskinen. Medför såklart även minskade servicekostnader osv. </li>
            </ul>

            <p>Här är din bästa investering detta året.</p>
            <div className="row justify-content-center mt-1 p-2">
            <img src = "images/tand.jpg" width={350} alt="backround"></img>
            <div style={{color: "white"}}>__</div>
            <img src = "images/animerad.gif" width={350} alt="backround"></img>
            <div style={{color: "white"}}>__</div>
            <img src = "images/hjul.jpg" width={350} alt="backround"></img>              
            </div>           
            <div style={{color: "white" }}>.</div>
            <div style={{color: "white" }}>.</div>

          </div>
        </main>     
      </div>
    </div>
  </main>
}
export default Frashjul;
