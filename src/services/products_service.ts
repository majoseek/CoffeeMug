import Iproduct from "../models/product.interface";
import Product from "../models/product_model";
import updateProductDTO from "../models/updateProductDTO.interface";
export default class ProductService {
    get_products = async () => {
        return await Product.find({});
    };
    get_product_with_given_id = async (id: number) => {
        return await Product.find({ id: id });
    };
    save_product = async (product: Iproduct) => {
        if (product.name.length > 10)
            throw new Error("Product name cant exceed 100 characters");
        else {
            const new_product = new Product({
                id: product.id,
                name: product.name,
                price: product.price,
                updateDate: new Date(),
            });
            return await new_product.save();
        }
    };
    delete_given_product = async (id: number) => {
        return await Product.findOneAndDelete({ id: id });
    };
    update_given_product = async (data: updateProductDTO) => {
        if (data.name && data.price) {
            Product.updateOne(
                { id: data.id },
                {
                    name: data.name,
                    price: data.price,
                },
                (err: Error) => {
                    if (err) throw err;
                }
            );
        } else if (data.name) {
            Product.updateOne(
                { id: data.id },
                {
                    name: data.name,
                },
                (err: Error) => {
                    if (err) throw err;
                }
            );
        } else if (data.price) {
            Product.updateOne(
                { id: data.id },
                {
                    price: data.price,
                },
                (err: Error) => {
                    if (err) throw err;
                }
            );
        }
    };
}
