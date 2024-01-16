/* import React from "react";
import { Banner } from "../layout/Banner";
import Timeline from "../layout/TimeLine";
import TimeLineResponsive from "../layout/TimeLineResponsive";

export const Home = () => {
  return (
    <>
      <Banner />
      <div className="sm:hidden md:hidden lg:pt-2 xl:pt-2 text-3xl font-black text-black">
        <Timeline />
      </div>
      <div className="lg:hidden xl:hidden text-3xl font-black text-black">
        <TimeLineResponsive />
      </div>
    </>
  );
};
 */

import React from "react";
import { Banner } from "../layout/Banner";
import Timeline from "../layout/TimeLine";
import TimeLineResponsive from "../layout/TimeLineResponsive";

export const Home = () => {
  return (
    <>
      <Banner />

      {/* Timeline visible solo en pantallas grandes (lg, xl) */}
      <div className="hidden sm:hidden md:hidden lg:block xl:block pt-2 text-3xl font-black text-black">
        <Timeline />
      </div>

      {/* TimeLineResponsive visible solo en pantallas pequeñas y medianas (sm, md) */}
      <div className="sm:block md:block lg:hidden xl:hidden pt-2 text-3xl font-black text-black">
        <TimeLineResponsive />
      </div>
    </>
  );
};
