import React from "react";

function BookList(props) {
  return (
    <div className="home-products">
      <div className="grid__row">
        {props.books.map((book) => (
          <div key={book.id} className="grid__column-2">
            <div key={book.id} className="home-product-main">
              <div key={book.id}>
                <img
                  className="home-products-pic"
                  src={book.cover}
                  alt={book.title}
                />
                <h2 className="home-products-header">{book.title}</h2>
                <p className="home-products-infor">{book.author}</p>
                <p className="home-products-price">
                  Price: ${book.price / 100}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
