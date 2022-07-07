import React from "react";
import Carousel from "../Carousel/Carousel";
import SimpleCarousel from "../Carousel/SimpleCarousel";
import Heading from "../Heading/Heading";

type Props = {};

const Showcase = (props: Props) => {
  return (
    <>
      <Heading title={"Knitwear we love"} subtitle={"keep cozy this season"} />
      <Carousel />
    </>
  );
};

export default Showcase;
