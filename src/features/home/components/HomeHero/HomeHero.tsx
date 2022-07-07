import React from "react";
import Image from "next/image";
import styles from "../../../../../styles/Home.module.css";
import { Button } from "../../../../components/Elements";

const HomeHero = () => {
  return (
    <div className="h-[1000px] flex w-screen pt-8">
      <div className={styles.ImageContainer}>
        <div className="w-full h-auto">
          <Image
            src={"/images/home_hero_1.webp"}
            alt={"fashion model"}
            width={550}
            height={740}
            layout={"responsive"}
          />
        </div>
        <div className={styles.ImageText}>
          <h1 className="text-xl font-bold mb-6">NEW STYLES</h1>
          <p className="text-base mb-6">
            New season, new arrivals – find your perfect look today.
          </p>
          <Button text={"SHOP NOW"} />
        </div>
      </div>

      <div className={styles.ImageContainer}>
        <div className="w-full h-auto">
          <Image
            src={"/images/home_hero_2.webp"}
            alt={"fashion model"}
            width={550}
            height={740}
            layout={"responsive"}
          />
        </div>
        <div className={styles.ImageText}>
          <h1 className="text-xl font-bold mb-6">BEST SELLERS</h1>
          <p className="text-base mb-6">
            New season, new arrivals – find your perfect look today.
          </p>
          <Button text={"SHOP NOW"} />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
