import CreateProduct from "../components/CreateProductForm";
import ShowAllProductsView from "./ShowAllProductsView";


const CreateProductView = () => {
    return (
        <div className="container">
            <h1>Product Manager</h1>
            <CreateProduct />
            <ShowAllProductsView/>
        </div>
    );
};
export default CreateProductView;