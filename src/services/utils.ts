import mongoose from "mongoose";
import Iproduct from "../models/product.interface";
const uri =
    "mongodb+srv://admin:admin@cluster0.bcan9.mongodb.net/coffeemug?retryWrites=true&w=majority";
export const connect_to_db = () => {
    mongoose.connect(uri).catch((err) => {
        console.log(err);
    });
};
export const isProduct = (object: any): object is Iproduct => {
    return (
        "id" in object &&
        "name" in object &&
        "price" in object &&
        "updateDate" in object
    );
};
