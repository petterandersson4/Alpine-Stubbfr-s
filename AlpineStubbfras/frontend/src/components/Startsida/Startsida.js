import React from "react";

const Startsida = () => {
  return <main id="mainContent">

    <div className="container">
      <div className="row justify-content-center mt-3 p-0"><img  src = "images/rhino.JPG" width={300} alt="backround"></img></div> 
      <div className="row justify-content-center mt-3 p-0">
        <h3 style={{color: "#00AA81"}}>Välkommen till Alpine Stubbfräs</h3>
      </div>
        <div className="row justify-content-center mt-0 p-2">
        <p>
        Vi är officiell återförsäljare för Alpine Magnum stubbfräs och Rhino stubbfräshjul. Båda är marknadsledande produkter och optimerar din stubbfräsning. Vårt mål är att hjälpa våra kunder till bättre lönsamhet. Detta genom att hålla nere kostnader för själva stubbfräsningen samt effektivisera och få ut maximal prestanda av er maskin eller av den maskin ni köper av oss.    
        </p>
        <p>
        Vi har 2 olika produkter i vårt sortiment. Dels <u><a style={{ color: '#00AA81' }} href="/stubbfras">Alpine Magnum stubbfräs</a></u> och dels <u><a style={{ color: '#00AA81' }} href="/frashjul">Rhino stubbfräshjul</a></u> som finns till alla maskiner på marknaden. Titta in under flikarna för mer information om de båda produkterna.      
        </p>
        </div>
        
        


        <div className="row justify-content-center mt-0 p-0">
          <img src = "images/fras.jpg" width={400} alt="" />
          <div style={{color: 'white' }}>____________________</div>
          <img src = "images/animerad.gif" width={400} alt="" />
        </div>
        <div style={{color: 'white' }}>.</div>
        <p style={{color: 'white' }}>.</p>
        <div style={{color: "white" }}>.</div>

      </div>
  </main>
}
export default Startsida;
