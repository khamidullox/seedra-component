import React from "react";
import Novbar from "./components/Novbar";
import HeroProduct from "./components/HeroProduct";
import ProductList from "./components/ProductList";
import ProductGrid from "./components/ProductGrid";
import OurBlog from "./components/OurBlog";

function App() {
  return (
    <>
      <Novbar />
      <div className="containerH  font-['Lexend']">
        <HeroProduct />
        <ProductList />
        <ProductGrid />
        <OurBlog />
      </div>
    </>
  );
}

export default App;
