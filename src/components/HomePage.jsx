import Header from "./Header";
import PropTypes from "prop-types";

function HomePage({ products }) {
  return (
    <>
      <Header />
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
    </>
  );
}

HomePage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ),
};

export default HomePage;
