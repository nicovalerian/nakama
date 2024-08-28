import PropTypes from "prop-types";

function ProductCard({ product }) {
  return (
    <>
      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src={product?.image || ""}
            alt=""
            className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              {product?.title}
            </h3>

            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-gray-900"> ${product?.price} </span>
            </p>
          </div>
        </a>
      </li>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default ProductCard;
