import React from "react";

const Products = ({ products }) => {
  return (
    <div className="row g-2 p-3  ">
      {/* Mapping products into a card */}
      {products.map((product) => (
        <div className="col-md-6 col-lg-4" key={product.id}>
          <div className="card md-5 d-flex justify-content-between g-2 h-100">
            <div className="card-body">
              <img
                className="card-img-top"
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "200px" }}
              />
              <p className="card-text h6 ">
                <span className="text-primary">Name:</span>
                {product.title}
              </p>
              <div className="card-text h6">
                <span className="text-primary">Category:</span>
                {product.category}
              </div>
              <div className="card-text h6">
                <span className="text-primary">Price</span> Ksh {product.price}
              </div>
              <div className="card-text h6">
                <span className="text-primary">Description:</span>
                {product.description}
              </div>
              <div className="d-4 justify-content-between">
                <button
                  type="button"
                  className="btn btn-info p-2 mt-3"
                  style={{}}
                >
                  Add To Cart
                </button>
                <button
                  type="button"
                  className="btn btn-info p-2 mt-3 mx-4"
                  style={{}}
                  data-bs-toggle="modal"
                  data-bs-target="#productdetails"
                >
                  View Details
                </button>
              </div>
              {/* Modal for Viewing More Details */}
              <div
                className="modal fade"
                id="productdetails"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
              >
                <div class="modal-dialog modal-dialog-centered modal-dailog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title">Product Details</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
