import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const ShowAllProductsView = () => {
    const [products, setProducts] = useState([]);
    const [onDelete, setOnDelete] = useState(false);

    useEffect(() => {
        console.log("useEffect");
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data.products);
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [onDelete]);

    const deleteHandler = (index) => {
        axios
            .delete(
                `http://localhost:8000/api/products/delete/${products[index]._id}`
            )
            .then((res) => {
                console.log(res.data);
                setOnDelete(!onDelete);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <div className="nav ">
                <h1 className="page-header">List of Products</h1>
            </div>
            <ul className="list">
                {products.map((product, index) => (
                    <li className="product-list-item" key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                        <button className="btn btn-warning"> 
                            <Link to={`/products/${product._id}/edit`}>
                                Edit
                            </Link>
                        </button>
                        <button className="btn btn-danger" onClick={() => deleteHandler(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowAllProductsView;