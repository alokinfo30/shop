import React from "react";
import Navbar from "../Navbar/Navbar";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import ProductSection from "../ProductSection/ProductSection";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <NavigateButtons></NavigateButtons>
      <ProductSection></ProductSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;
