import { useState } from "react";
import axios from "axios";


const CreateProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


        const newProduct = {
            title,
            price,
            description,
        };

        axios
            .post("http://localhost:8000/api/products/new", newProduct)
            .then((res) => {
                console.log("response from server");
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    return (
        <form  onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" name="tittle" 
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                    type="number" className="form-control" name="price"
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text" className="form-control" name="description"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
            </div>
                <button type="submit" className="btn btn-primary" >
                    Create
                </button>
            
        </form>
    );
};

export default CreateProductForm;