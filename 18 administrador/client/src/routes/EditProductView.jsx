import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EditProductView = () => {
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data.product);
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description,
        };

        axios
            .put(`http://localhost:8000/api/products/update/${id}`, newProduct)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <div >
                <h1>Edit Product</h1>
                <Link to="/" className="btn btn-primary">
                    List of Products
                </Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" name="title"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" name="price"
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                        value={price}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" name="description"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        value={description}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">
                    Edit
                </button>
            </form>
        </div>
    );
};
export default EditProductView;