import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <h5 className={styles.title}>Alpine Stubbfräs</h5>
            <p className={styles.description}>
            <div> Munka Stubbfräs, Sjöbackavägen 26, 266 92 Munka-Ljungby </div>
            
            <div>Tel <a href="tel:+46705787776" style={{color: "#00AA81"}}>0705-78 77 76</a> </div> 

            <div><a  href={"mailto:johan@munkastubbfras.se"} style={{color: "#00AA81"}}>johan@munkastubbfras.se</a></div>
            <div style={{color: "#1d1d1d"}}>.</div>
            </p>
          </div>
          <div className="col-2.1">
            <ul className="list-unstyled">
              <li>
                <a className={styles.footerlink} href="https://munkastubbfras.se/">
                  Munka Stubbfräs
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="https://munkastubbfras.se/stubbfrasning/">
                  Stubbfräsning
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="https://munkastubbfras.se/taktvatt/">
                  Taktvätt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;