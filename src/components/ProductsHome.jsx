import React from "react";
import ProductHomeLayout from "../pages/layout/ProductHomeLayout";

const ProductsHome = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      <ProductHomeLayout
        title="LINEA MULTIPOLAR"
        img="./HomeCard/lineaMultipolar.png"
      />
      <ProductHomeLayout title="LINEA STEKO" img="./HomeCard/steko.png" />
      <ProductHomeLayout title="LINEA SCHUKO" img="./HomeCard/schuko.png" />

      <ProductHomeLayout
        title="LINEA INDUSTRIAL"
        img="./HomeCard/lineaIndustrial.png"
      />
      <ProductHomeLayout
        title="BASES MULTIPLES"
        img="./HomeCard/basesMultiples.png"
      />
      <ProductHomeLayout
        title="CONECTOR SOLDADURA"
        img="./HomeCard/conectorSoldadura.png"
      />
      <ProductHomeLayout
        title="LINEA DE CAJAS"
        img="./HomeCard/lineaSoldadura.png"
      />
    </div>
  );
};

export default ProductsHome;
