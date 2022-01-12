import { Request, Response } from "express";
import {
    delete_given_product,
    get_products,
    get_product_with_given_id,
    save_product,
    update_given_product,
} from "../services/products_service";
import { isProduct } from "../services/utils";
export const get_all_products = (req: Request, res: Response) => {
    get_products()
        .then((result) => {
            res.status(200).send({ message: "OK", result: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("There was an error fetching all products");
        });
};
export const get_product = (req: Request, res: Response) => {
    get_product_with_given_id(Number(req.params.id))
        .then((result) => {
            res.status(200).send({ message: "OK", result: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("There was an error fetching all products");
        });
};
export const update_product = (req: Request, res: Response) => {
    if (req.body == undefined || req.body.id == undefined)
        res.status(400).send("You must specify product id");
    else {
        update_given_product(req.body)
            .then(() => {
                res.status(201).send({ message: "OK" });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send({
                    message: "There was an error updating the product",
                });
            });
    }
};
export const delete_product = (req: Request, res: Response) => {
    delete_given_product(Number(req.params.id))
        .then(() => {
            res.send({ message: "OK" });
        })
        .catch((err) => {
            console.log(err);
            res.send({
                message:
                    "There was a problem with deleting product with given id",
            });
        });
};
export const add_product = (req: Request, res: Response) => {
    if (req.body == undefined || !isProduct(req.body))
        res.status(400).send("Wrong input body");
    else {
        save_product({
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            updateDate: new Date(req.body.updateDate),
        })
            .then(() => {
                res.status(201).send({
                    result: { id: req.body.id },
                    message: "OK",
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send({
                    message: "There was a problem with adding your product",
                });
            });
    }
};
