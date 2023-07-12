import React from "react";
import "./style.css";
import CarImg from "./crs.png";
import Layout from "./Layout";
function Home() {

  return (
    <>
      <Layout className="mb-48">
        <section class="home" id="home">
          <img data-speed="5" class="home-parallax" src={CarImg} alt="" />
          <h3 data-speed="-2" class="home-parallax">
          Trouvez votre voiture préférée ici pour voyager
          </h3>
        </section>

        
      </Layout>
    </>
  );
}

export default Home;
