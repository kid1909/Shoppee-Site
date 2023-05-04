import "../assets/css/content.css";
import "../index.css";
import ProductList from "./ProductList";
import React, { useState } from "react";

function Content() {
  //   const [isActive, setIsActive] = useState(false);

  //   const handleClick = (event) => {
  //     setIsActive((current) => !current);
  //   };

  return (
    <div className="app_container">
      <div className="grid">
        <div className="grid__row app_content">
          <div className="grid__column-2">
            <nav className="category">
              <h3 className="category__heading">
                <i className="category__heading-icon fas fa-list"></i>
                Category
              </h3>
              <ul className="category-list">
                <li className="category-item">
                  <a href="#" className="category-item__link">
                    Cosmetic
                  </a>
                </li>
                <li className="category-item">
                  <a href="#" className="category-item__link">
                    Cosmetic
                  </a>
                </li>
                <li className="category-item">
                  <a href="#" className="category-item__link">
                    Cosmetic
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="grid__column-10">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
