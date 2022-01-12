import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    updateDate: Date,
});
export default mongoose.model("Product", productSchema);
