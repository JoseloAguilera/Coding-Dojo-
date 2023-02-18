import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowAllProductsView = () => {
    const [products, setProducts] = useState([]);

    useState(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data.products);
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="listado">
            <h1>List of Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowAllProductsView;