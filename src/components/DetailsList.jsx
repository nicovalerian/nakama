import PropTypes from "prop-types";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function DetailsList({ product }) {
  return (
    <>
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm h-[20rem]">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Product Name</dt>
            <dd className="text-gray-700 sm:col-span-2">{product?.title}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Category</dt>
            <dd className="text-gray-700 sm:col-span-2">{capitalizeFirstLetter(product?.category)}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Rating</dt>
            <dd className="text-gray-700 sm:col-span-2">{product?.rating.rate} / 5.0 ⭐</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Price</dt>
            <dd className="text-gray-700 sm:col-span-2">${product?.price}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Description</dt>
            <dd className="text-gray-700 sm:col-span-2">
                {product?.description}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}

DetailsList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
};

export default DetailsList;
