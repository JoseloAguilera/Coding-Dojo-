const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products", ProductController.allProducts);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.post("/api/products/new", ProductController.newProduct);
};
