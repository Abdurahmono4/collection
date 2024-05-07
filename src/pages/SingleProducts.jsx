import { useLoaderData, Link } from "react-router-dom"; // Import Link from react-router-dom
import { customFetch } from "../utils"; // Remove duplicate import
import { useState } from "react";
import { formatPrice } from "../utils"; // Import the missing formatPrice function

export const loader = async ({ params }) => {
  const request = await customFetch(`/products/${params.id}`);
  return { product: request.data.data };
};

function SingleProducts() {
  const { product } = useLoaderData();
  const { image, title, description, price, colors, company } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState();
  return (
    <section className="align-content">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link> // Correctly use the Link component
          </li>
          <li>
            <Link to="/products">Products</Link> // Correctly use the Link
            component
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          className="w-96 h-96 object-cover rounded-lg"
          src={image}
          alt={title}
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-2xl text-neutral-content mt-2">{company}</h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-2">
            {colors.map(
              (
                color,
                index // Add index as key for each child
              ) => (
                <button
                  key={index} // Add unique key prop
                  className={`badge w-6 h-6 mr-2 ${
                    color === productColor ? "border-2 border-secondary" : ""
                  }`}
                  style={{ backgroundColor: color }} // Correct the style attribute
                  onClick={() => setProductColor(color)}
                ></button>
              )
            )}
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <h4 className="text-md font-medium tracking-wider capitalize">
              amount
            </h4>
          </label>
          <select
            className="select select-secondary select-bordered select-md"
            name=""
            id=""
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          >
            {generateAmountOptions(20)}
          </select>
          <div>
            <button
              className="btn btn-primary btn-md btn-block mt-4"
              onClick={() => {
                console.log("add to bag");
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProducts;
