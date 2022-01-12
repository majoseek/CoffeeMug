import mongoose from "mongoose";
import Iproduct from "../models/product.interface";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
const uri = `mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.bcan9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
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
        "updateDate" in object &&
        object.name.length <= 100
    );
};
