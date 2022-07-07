import React from "react";
import Image from "next/image";

type Props = {};

const Card = (props: Props) => {
  return (
    <>
      <div>
        <Image
          src={"/images/home_hero_1.webp"}
          alt={"test"}
          width={350}
          height={450}
          layout={"responsive"}
        />
      </div>
    </>
  );
};

export default Card;
