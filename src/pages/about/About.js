import { Card, Features, Navbar } from "../../components";
import { Footer } from "../../containers";
import { afi, aqeel, haryo, vaza } from "./imports";
import img from "../../assets/Kelapa-Sawit.png";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="about__section">
        <div className="about__section-hero">
          <div className="about__section-hero__text section__padding">
            <h1>Welcome to Karya Bumi</h1>
            <p>
              Karya Bumi is an Indonesian private company engaged in supplying
              products in coconut derivates, handcrafts and decor, spices, and
              essential oils.
            </p>
            <p>
              Our company is very skilled in the industry, we have the best
              experiences that make our customers satisfied with every existing
              cooperation.
            </p>
          </div>
        </div>
        <div className="about__section-content container section__padding">
          <div className="about__section-content__image">
            <p>Click To Learn More</p>
            <img src={img} alt="kelapa sawit" />
          </div>
          <h1> Our Team</h1>
          <p>
            These are the people who work every day to create great products
            that will help your needs
          </p>
          <div className="about__section-content__card">
            <Card
              img={aqeel}
              name="Aqilla Jundiy"
              position="Founder"
              desc="David loves taking on challenges. With his multi-year experience as Commercial Director in the corporate industry, David has helped the company to get where it is today. David is among the best minds."
            />
            <Card
              img={vaza}
              name="Ronansa Vaza"
              position="Founder"
              desc="David loves taking on challenges. With his multi-year experience as Commercial Director in the corporate industry, David has helped the company to get where it is today. David is among the best minds."
            />
            <Card
              img={haryo}
              name="Haryo Difa"
              position="Founder"
              desc="David loves taking on challenges. With his multi-year experience as Commercial Director in the corporate industry, David has helped the company to get where it is today. David is among the best minds."
            />
            <Card
              img={afi}
              name="Hanafi Afnan"
              position="Founder"
              desc="David loves taking on challenges. With his multi-year experience as Commercial Director in the corporate industry, David has helped the company to get where it is today. David is among the best minds."
            />
          </div>
          <Features />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
