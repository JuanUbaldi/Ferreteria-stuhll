import React from "react";

const ProductHomeLayout = (props) => {
  return (
    <div className="bg-gray-200 p-4 m-2 xs:w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 h-64 rounded-md shadow-md flex items-center justify-between">
      <img
        src={props.img}
        alt={props.title}
        className="xs:w-16 xs:h-16  sm:w-16 sm:h-16  md:w-32 md:h-32  lg:w-48 lg:h-48 object-cover rounded-md mr-4"
      />
      <div>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
          {props.title}
        </h2>
      </div>
    </div>
  );
};

export default ProductHomeLayout;
