import express from "express";
import products_router from "./routes/products";
const app = express();
const PORT = 8080;
app.use("/products", products_router);
app.listen(PORT, () => {
     console.log(`App listening on port ${PORT}`);
});
