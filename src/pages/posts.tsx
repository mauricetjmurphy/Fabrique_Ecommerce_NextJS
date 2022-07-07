import type { NextPage } from "next";
import { useQuery } from "react-query";
import styles from "../../styles/Home.module.css";
import { Spinner } from "../components/Elements";
import { Meta } from "../components/Meta";
import { getPosts } from "../utils/getPosts";
import useSWR from "swr";
import { toToastItem } from "react-toastify/dist/utils";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

const Posts: NextPage = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/",
    fetcher
  );

  if (!data) return <Spinner />;

  if (error) return <p>{error}</p>;

  return (
    <>
      <Meta page={"home"} />
      <h1>Posts</h1>
      {data.map((item: Post) => (
        <h1 key={item.title}>{item.title}</h1>
      ))}
    </>
  );
};

export default Posts;
