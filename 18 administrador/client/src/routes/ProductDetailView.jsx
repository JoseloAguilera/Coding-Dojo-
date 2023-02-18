import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetailView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data.product);
                setProduct(res.data.product);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="container">
            <h1>Detail Product</h1>
            <p> <span> Product ID:</span> Product ID: {product._id}</p>
            <p> <span> Product Title:</span> {product.title}</p>
            <p> <span> Product Price:</span> {product.price}</p>
            <p> <span> Product Description:</span> {product.description}</p>
        </div>
    );
};

export default ProductDetailView;