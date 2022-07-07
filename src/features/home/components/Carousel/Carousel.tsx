import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SampleNextArrowProps = {
  className?: string;
  style?: {};
  onClick?: () => void;
};

function SampleNextArrow(props: SampleNextArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#00000020",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
}

type SamplePrevArrowProps = {
  className?: string;
  style?: {};
  onClick?: () => void;
};

function SamplePrevArrow(props: SamplePrevArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#00000020",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
}

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="flex justify-center">
        <div className="w-[95vw] pt-16">
          <Slider {...settings}>
            <div>
              <div
                style={{
                  padding: 8,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={"/images/home_hero_1.webp"}
                  alt={"test"}
                  width={350}
                  height={450}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  padding: 8,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={"/images/home_hero_1.webp"}
                  alt={"test"}
                  width={350}
                  height={450}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  padding: 8,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={"/images/home_hero_1.webp"}
                  alt={"test"}
                  width={350}
                  height={450}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  padding: 8,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={"/images/home_hero_1.webp"}
                  alt={"test"}
                  width={350}
                  height={450}
                />
              </div>
            </div>
            <div>
              <div
                style={{
                  padding: 8,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={"/images/home_hero_1.webp"}
                  alt={"test"}
                  width={350}
                  height={450}
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

type Props = {};

const Carousel = (props: Props) => {
  return <SimpleSlider />;
};

export default Carousel;
