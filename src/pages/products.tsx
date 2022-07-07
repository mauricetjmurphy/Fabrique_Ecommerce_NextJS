import type { NextPage } from "next";
import React from "react";
import { fetchProducts } from "../features/products/api/getProducts";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { Product } from "../types";

const Products: NextPage = ({ products = [] }: any) => {
  return (
    <div>
      {products.map((item: Product) => (
        <h1 key={item.VariantSKU}>{item.Vendor}</h1>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const products = await fetchProducts();

  return {
    props: { products: products },
  };
}

export default Products;
