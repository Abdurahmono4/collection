import { Hero } from "../components/Hero";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { customFetch } from "../utils";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return products;
};

function Landing() {
  return (
    <div className="align-content pt-10">
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default Landing;
