import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-primary navbar-expand-sm text-center p-3 ms-auto ">
        <div className="container">
          <a className="navbar-brand  shopify text-white" href="#">
            Shopify
          </a>
          {/* <!-- Toggler/collapsibe Button --> */}

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto p-3">
              <li className="nav-item g-3 ">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Cart
                  <i className="bi bi-cart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
