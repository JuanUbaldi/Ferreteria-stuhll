import React from "react";

const TimeLineResponsive = () => {
  return (
    <div className="flex flex-col items-center pb-12">
      {/* Primer círculo */}
      <div className="bg-blue-500 w-8 h-1  "></div>

   
      
      {/* Línea horizontal entre el primer y segundo círculo */}
      <div className="bg-blue-500 w-2 h-64">
        <div className="bg-blue-500 w-32 h-2 relative top-64 left-8"></div>
        <div className="w-96 h-80 text-lg font-medium absolute   relative top-32 right-96">
              <h3 className="text-3xl text-center pb-2">2008</h3>
              Empresa familiar que inicia sus actividades en el año 2008 y en
              pocos años ha conseguido incorporar a su producción, las líneas
              que requiere el mercado eléctrico local bajo normas establecidas.
            </div>
      </div>


      


      {/* Segundo círculo */}
      <div className="bg-blue-500 w-8 h-8 rounded-full "></div>

     {/* Línea horizontal entre el primer y segundo círculo */}
     <div className="bg-blue-500 w-2 h-64">
     <div className="bg-blue-500 w-32 h-2 relative top-64 right-48"></div>
     <div className="w-96 h-80 text-lg font-medium absolute   relative top-32 left-32">
           <h3 className="text-3xl text-center pb-2">2008</h3>
           Empresa familiar que inicia sus actividades en el año 2008 y en
           pocos años ha conseguido incorporar a su producción, las líneas
           que requiere el mercado eléctrico local bajo normas establecidas.
         </div>
   </div>


      {/* Tercer círculo */}
      <div className="bg-blue-500 w-8 h-8 rounded-full "></div>

      {/* Línea horizontal entre el primer y segundo círculo */}
      <div className="bg-blue-500 w-2 h-64">
        <div className="bg-blue-500 w-32 h-2 relative top-64 left-8"></div>
        <div className="w-96 h-80 text-lg font-medium absolute   relative top-32 right-96">
              <h3 className="text-3xl text-center pb-2">2008</h3>
              Empresa familiar que inicia sus actividades en el año 2008 y en
              pocos años ha conseguido incorporar a su producción, las líneas
              que requiere el mercado eléctrico local bajo normas establecidas.
            </div>
      </div>


        {/* Cuarto círculo */}
        <div className="bg-blue-500 w-8 h-8 rounded-full "></div>

{/* Línea horizontal entre el primer y segundo círculo */}
<div className="bg-blue-500 w-2 h-64">
  <div className="bg-blue-500 w-32 h-2 relative top-64 left-8"></div>
  <div className="w-96 h-80 text-lg font-medium absolute   relative top-32 right-96">
        <h3 className="text-3xl text-center pb-2">2008</h3>
        Empresa familiar que inicia sus actividades en el año 2008 y en
        pocos años ha conseguido incorporar a su producción, las líneas
        que requiere el mercado eléctrico local bajo normas establecidas.
      </div>
</div>
<div className="bg-blue-500 w-8 h-8 rounded-full "></div>
<div className="bg-blue-500 w-2 h-64"></div>
    </div>
  );
};

export default TimeLineResponsive;

<div className="bg-blue-500 w-32 h-2 absolute top-32 left-2"></div>;
