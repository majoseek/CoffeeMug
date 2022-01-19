import express from "express";
import { content_type_middleware } from "./middlewares/middleware";
import products_router from "./routes/products";
import { connect_to_db } from "./services/utils";
const app = express();
const PORT = 8080;
connect_to_db();
app.use(express.json());
app.use(content_type_middleware);
app.use("/products", products_router);
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});