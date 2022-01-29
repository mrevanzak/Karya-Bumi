import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <p>
          karya <br></br>
          <span>bumi</span>
        </p>
      </div>
      <div className="footer__text">
        <div className="footer__text-container">
          <div className="footer__text-container__content">
            <h6>CONTACT US</h6>
            <p>Further information please contact us</p>
          </div>
          <div className="footer__text-container__content">
            <h6>KARYA BUMI</h6>
            <p>The finest goods and products</p>
          </div>
          <div className="footer__text-container__content">
            <h6>OFFICE / WAREHOUSE</h6>
            <p>
              Jl. Pengasih - Wates, Dlingo, Banyuroto, Nanggulan, Kabupaten
              Kulon Progo, Daerah Istimewa Yogyakarta 55671{" "}
            </p>
          </div>
        </div>
        <div className="footer__text-container">
          <div className="footer__text-container__content">
            <h6>CONTACT PERSON</h6>
            <p>Aqilla Abdurrahman Jundiy, Mr.</p>
          </div>
          <div className="footer__text-container__content">
            <h6>TELEPHONE NUMBER</h6>
            <p>+6281336236417</p>
          </div>
          <div className="footer__text-container__content">
            <h6>EMAIL</h6>
            <p>karyabumi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
