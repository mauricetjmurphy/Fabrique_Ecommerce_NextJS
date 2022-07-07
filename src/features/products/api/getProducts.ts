import products from "../../../data/products";

async function fetchProducts() {
  // const inventory = API.get(apiUrl)
  return Promise.resolve(products);
}

export { fetchProducts, products as staticProducts };
