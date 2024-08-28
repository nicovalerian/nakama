import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HomePage({ products }) {
  return (
    <>
      <Header />

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
              Discover the Essence of Japan: <br></br>New Collection Now
              Available!
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Unveil our latest arrivals, inspired by the timeless beauty and
              craftsmanship of Japan. Shop now and bring a touch of elegance and
              tradition to your everyday life!
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <Link to="/shop" className="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Casual Trainers
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/shop" className="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Winter Jumpers
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Link to="/shop" className="group relative block">
                <img
                  src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Skinny Jeans Blue
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl">
            Trusted by Global Shoppers and Retailers
          </h2>

          <p className="mt-4 text-gray-500 sm:text-base">
            Nakama is the go-to destination for premium Japanese products,
            delivering excellence and customer satisfaction across the globe.
            Here&apos;s what sets us apart:
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Total Sales
            </dt>

            <dd className="text-4xl font-extrabold text-nakamaRed md:text-5xl">
              $2.3m
            </dd>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Official Partners
            </dt>

            <dd className="text-4xl font-extrabold text-nakamaRed md:text-5xl">
              12
            </dd>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Premium Collections
            </dt>

            <dd className="text-4xl font-extrabold text-nakamaRed md:text-5xl">
              86+
            </dd>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Happy Shoppers
            </dt>

            <dd className="text-4xl font-extrabold text-nakamaRed md:text-5xl">
              90k+
            </dd>
          </div>
        </dl>
      </div>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Exclusive <span className="text-nakamaRed">“Kogane”</span>{" "}
              Collection
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Step into a world where tradition meets sophistication. The Kogane
              Collection is a carefully curated selection of rare, hand-crafted
              Japanese treasures.
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <li key={product.id}>
                <a href="/shop" className="group block overflow-hidden">
                  <img
                    src={product?.image || ""}
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {product.title}
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>
                      <span className="tracking-wider text-gray-900">
                        ${product.price}
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
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
