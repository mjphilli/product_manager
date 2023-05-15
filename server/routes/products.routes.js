const ProductController = require("../controllers/products.controllers")


module.exports = (app)=>{
    app.get("/api/products", ProductController.allProducts)
    app.get("/api/products/:id", ProductController.oneProduct)
    app.post("/api/products", ProductController.addProduct)
    app.patch("/api/products/:id", ProductController.updateProduct)
    app.delete("/api/products/:id", ProductController.deleteProduct)
}