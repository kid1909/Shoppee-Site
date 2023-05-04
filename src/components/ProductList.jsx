import React, { useState } from "react";
import BookList from "./BookList.jsx";

function ProductList() {
  const books = [];

  const [products, setProducts] = useState([
    {
      id: "1",
      title: "Learn To Code With JavaScript",
      author: "Darren Jones",
      price: 2260,
      pages: 425,
      popular: 1,
      cover: "https://m.media-amazon.com/images/I/412KSS+3fjL._SX260_.jpg",
      keywords: ["coding", "computer"],
    },
    {
      id: "2",
      title: "JavaScript: The Definitive Guide",
      author: "David Flanagan",
      price: 2399,
      pages: 708,
      popular: 1,
      cover: "https://m.media-amazon.com/images/I/51wijnc-Y8L._SX260_.jpg",
      keywords: ["coding", "computer"],
    },
    {
      id: "3",
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      price: 1994,
      pages: 474,
      popular: 1,
      cover: "https://m.media-amazon.com/images/I/51-5ZXYtcML.jpg",
      keywords: ["coding", "computer"],
    },
    {
      id: "4",
      title: "Xbox One",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 3,
      cover: "https://m.media-amazon.com/images/I/619Bmcg-EIL._AC_SL1377_.jpg",
      keywords: ["gaming"],
    },
    {
      id: "5",
      title: "Bose S1 Speaker",
      author: "Marijn Haverbeke",
      price: 100000,
      pages: 474,
      popular: 3,
      cover: "https://m.media-amazon.com/images/I/71husYT6LoL._AC_SL1500_.jpg",
      keywords: ["electronic"],
    },
    {
      id: "6",
      title: "Clip on Sunglasses",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 3,
      cover: "https://m.media-amazon.com/images/I/51Bai2pKHUL._AC_SL1500_.jpg",
      keywords: ["fashion", "modern"],
    },
    {
      id: "7",
      title: "Door Stopper",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 1,
      cover: "https://m.media-amazon.com/images/I/71ldg0L0tcL._AC_SL1500_.jpg",
      keywords: ["utilities"],
    },
    {
      id: "8",
      title: "PS5 Bunddle",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 5,
      cover: "https://m.media-amazon.com/images/I/615rF4XbrbL._AC_SL1500_.jpg",
      keywords: ["gaming"],
    },
    {
      id: "9",
      title: "Office Suite",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 3,
      cover: "https://m.media-amazon.com/images/I/71gNKoc3EQL._AC_SL1011_.jpg",
      keywords: ["computer"],
    },
    {
      id: "10",
      title: "iPhone 12 64GB",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 4,
      cover: "https://m.media-amazon.com/images/I/513NI5xpYjL._AC_SL1000_.jpg",
      keywords: ["phone"],
    },
    {
      id: "11",
      title: "Notion 360",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 5,
      cover: "https://m.media-amazon.com/images/I/81V1iumBuCL._AC_SL1500_.jpg",
      keywords: ["computer", "electronic"],
    },
    {
      id: "12",
      title: "iPhone 12 silicone case",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 5,
      cover: "https://m.media-amazon.com/images/I/51XJSF20d4L._AC_SL1500_.jpg",
      keywords: ["electronic"],
    },
    {
      id: "13",
      title: "WiFi Smart E26 Bulb, Multicolor + White Light Range",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 5,
      cover: "https://m.media-amazon.com/images/I/61NSe9SAohL._AC_SL1500_.jpg",
      keywords: ["electronic"],
    },
    {
      id: "14",
      title: "Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 5,
      cover: "https://m.media-amazon.com/images/I/61RNVt9kXUL._AC_SL1000_.jpg",
      keywords: ["electronic"],
    },
    {
      id: "15",
      title: "Blood Pressure Monitor Digital Blood Pressure Monitor ",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 5,
      cover: "https://m.media-amazon.com/images/I/61xvBm99CnL._AC_SL1500_.jpg",
      keywords: ["electronic"],
    },
    {
      id: "16",
      title: "Gorilla-Lift 2-Sided Tailgate Lift Assist ",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 5,
      cover: "https://m.media-amazon.com/images/I/81Y9jHtKv1L._AC_SL1500_.jpg",
      keywords: ["electronic"],
    },
    {
      id: "17",
      title: " Rear Window Liftgate Glass Hinge Set Right&Left",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 5,
      cover: "https://m.media-amazon.com/images/I/610ke9HvIVL._AC_SL1500_.jpg",
      keywords: ["electronic"],
    },
    {
      id: "18",
      title: " Rear Window Liftgate Glass Hinge Set Right&Left",
      author: "Marijn Haverbeke",
      price: 50000,
      pages: 474,
      popular: 5,
      cover: "https://m.media-amazon.com/images/I/515Xgf8fLyL._AC_.jpg",
      keywords: ["electronic"],
    },
  ]);
  const sortProductsByPopular = () => {
    const sortedProducts = [...products].sort((a, b) => b.popular - a.popular);
    setProducts(sortedProducts);
    setSortPriceAscending(false);
    setSortPriceDescending(false);
    setFilterByKeyword(true);
  };

  const sortProductsByPriceDescending = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
    setSortPriceAscending(false);
    setSortPriceDescending(true);
    setFilterByKeyword(false);
  };
  const sortProductsByPriceAscending = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
    setSortPriceAscending(true);
    setSortPriceDescending(false);
    setFilterByKeyword(false);
  };

  const [sortPriceAscending, setSortPriceAscending] = useState(false);
  const [sortPriceDescending, setSortPriceDescending] = useState(false);
  const [filterByKeyword, setFilterByKeyword] = useState(false);

  const [modal, setModal] = useState(false);

  const openModal = () => {
    {
      setModal(!modal);
      const modalDiv = document.querySelector(".modal__body2");
      modalDiv.scroll(0, 0);
      console.log(e.currentTarget.id);
    }
  };
  const closeModal = () => {
    setModal(!modal);
  };

  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProduct = (id) => {
    setSelectedProductId(id);
    setModal(!modal);
  };
  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );

  return (
    <div>
      <BookList books={books} />

      {/* Arrange on price */}

      <div className="home-products">
        <div className="home-products-btn">
          {" "}
          <button
            className={`home-product-btn-list ${
              filterByKeyword ? "active" : ""
            }`}
            onClick={sortProductsByPopular}
          >
            Popular
          </button>
          <button
            className={`home-product-btn-list ${
              sortPriceDescending ? "active" : ""
            }`}
            onClick={sortProductsByPriceDescending}
          >
            Sort by Price (Highest to Lowest)
          </button>
          <button
            className={`home-product-btn-list ${
              sortPriceAscending ? "active" : ""
            }`}
            onClick={sortProductsByPriceAscending}
          >
            Sort by Price (Lowest to Highest )
          </button>
        </div>
        {/* <button onClick={resetProductList}>Reset List</button> */}
        <div className="grid__row">
          {products.map((product) => (
            <div key={product.id} className="grid__column-2">
              <div key={product.id} className="home-product-main">
                <div
                  onClick={() => handleProduct(product.id)}
                  className="home-product-list"
                  key={product.id}
                >
                  <img
                    className="home-products-pic"
                    src={product.cover}
                    alt={product.title}
                  />
                  <h2 className="home-products-header">{product.title}</h2>
                  <p className="home-products-infor">{product.author}</p>
                  <p className="home-products-price">
                    Price: ${product.price / 100}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`modal ${modal ? "active-modal" : ""}`}>
        <div
          onClick={closeModal}
          className={`modal__overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className={`modal__body2 ${modal ? "active-modal" : ""}`}>
          {selectedProduct ? (
            <div className="modal--content">
              <h2 className="modal--content__title">{selectedProduct.title}</h2>
              <img
                className="modal--content__image"
                src={selectedProduct.cover}
                alt={selectedProduct.title}
              />
              <p>Price: {selectedProduct.price}</p>
              <p>Pages: {selectedProduct.pages}</p>
              <p>Popular: {selectedProduct.popular}</p>
              <p>Keywords: {selectedProduct.keywords.join(", ")}</p>
            </div>
          ) : (
            <div>
              {products.map((product) => (
                <div key={product.id}>
                  <h2>{product.title}</h2>
                  <img src={product.cover} alt={product.title} />
                  <button onClick={() => handleProductClick(product.id)}>
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
