import type { NextPage } from "next";
import { Meta } from "../components/Meta";
import HomeHero from "../features/home/components/HomeHero/HomeHero";
import Showcase from "../features/home/components/ShowcaseCarousel/ShowcaseCarousel";

const Home: NextPage = () => {
  return (
    <>
      <Meta page={"home"} />
      <HomeHero />
      <Showcase />
    </>
  );
};

export default Home;
