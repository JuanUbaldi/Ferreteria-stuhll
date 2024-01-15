import React from "react";

const Timeline = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">¿QUIENES SOMOS?</h2>
      <div className="py-64 my-64 relative">
        <div className="event flex justify-around items-center w-full relative">
          <div className="circle bg-blue-500 w-8 h-8 md:w-12 md:h-12 rounded-full relative z-10">
            <div className="line-perpendicular-up absolute left-1/2 top-16 transform translate-y-(-50%) w-1 h-60 bg-blue-500"></div>
            <div className="border-t-8 border-blue-500 w-12  absolute left-1/2 top-16 transform -translate-x-1/2"></div>
            <div className="w-80 h-80 text-lg font-medium absolute -translate-x-1/3 bottom-0">
              <h3 className="text-3xl text-center pb-2">2008</h3>
              Empresa familiar que inicia sus actividades en el año 2008 y en
              pocos años ha conseguido incorporar a su producción, las líneas
              que requiere el mercado eléctrico local bajo normas establecidas.
            </div>
          </div>
          <div className="line absolute w-full h-1 bg-blue-500"></div>

          <div className="circle bg-blue-500 w-8 h-8 md:w-12 md:h-12 rounded-full relative z-10">
            <div className="line-perpendicular-down absolute left-1/2 bottom-16 transform translate-x-(-50%) w-1 h-60 bg-blue-500"></div>
            <div className="border-t-8 border-blue-500 w-12  absolute left-1/2 bottom-16 transform -translate-x-1/2"></div>
            <div className="w-80 h-80 text-lg font-medium absolute left-1/16 -translate-x-1/3 top-16 transform translate-x-(-50%)">
              Axion Conect SA, se posiciona en productos que comenzaban a
              discontinuarse, por el cierre de la importación, dando así la
              posibilidad de mostrar al mercado, la calidad y rapidez en la
              entrega de sus líneas de producción nacional.
            </div>
          </div>
          <div className="line absolute w-full h-1 bg-blue-500"></div>

          <div className="circle bg-blue-500 w-8 h-8 md:w-12 md:h-12 rounded-full relative z-10">
            <div className="line-perpendicular-up absolute left-1/2 top-16 transform translate-y-(-50%) w-1 h-60 bg-blue-500"></div>
            <div className="border-t-8 border-blue-500 w-12  absolute left-1/2 top-16 transform -translate-x-1/2"></div>
            <div className="w-80 h-80 text-lg font-medium -translate-x-1/3 absolute left-1/2 bottom-0 transform translate-x-(-50%)">
              <h3 className="text-3xl text-center pb-2">2013</h3>
              En 2013 se consolida incorporando maquinarias y personal idóneo.
              De esta manera se ha posibilitado la independencia total en los
              procesos de fabricación, siendo ésta un 100% propia.
            </div>
          </div>
          <div className="line absolute w-full h-1 bg-blue-500"></div>

          <div className="circle bg-blue-500 w-8 h-8 md:w-12 md:h-12 rounded-full relative z-10">
            <div className="line-perpendicular-down absolute left-1/2 bottom-16 transform translate-x-(-50%) w-1 h-60 bg-blue-500"></div>
            <div className="border-t-8 border-blue-500 w-12  absolute left-1/2 bottom-16 transform -translate-x-1/2"></div>
            <div className="w-80 h-80 text-lg font-medium -translate-x-1/3 absolute left-1/3 top-32 transform translate-x-(-50%)">
              <h3 className="text-3xl text-center pb-2">2014</h3>
              En 2014 se han seguido agregando nuevas líneas, como multipolares
              industriales y se posiciona en el mercado eléctrico
              comercializando productos con la marca STUHLL. En un mundo en el
              que la eficiencia y la constancia se han convertido en un problema
              considerable, Axion Conect SA. ha logrado garantizar la
              continuidad de sus líneas en constante desarrollo y calidad.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
