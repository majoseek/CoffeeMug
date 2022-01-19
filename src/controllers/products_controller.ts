import { Request, Response } from "express";
import { isProduct } from "../services/utils";
export default class ProductController {
    product_service: any;
    constructor(product_service: any) {
        this.product_service = product_service;
    }
    get_all_products = (req: Request, res: Response) => {
        this.product_service
            .get_products()
            .then((result: object) => {
                res.status(200).send({ message: "OK", result: result });
            })
            .catch((err: Error) => {
                console.log(err);
                res.status(500).send(
                    "There was an error fetching all products"
                );
            });
    };
    get_product = (req: Request, res: Response) => {
        this.product_service
            .get_product_with_given_id(Number(req.params.id))
            .then((result: object) => {
                res.status(200).send({ message: "OK", result: result });
            })
            .catch((err: Error) => {
                console.log(err);
                res.status(500).send(
                    "There was an error fetching all products"
                );
            });
    };
    update_product = (req: Request, res: Response) => {
        if (req.body == undefined || req.body.id == undefined)
            res.status(400).send("You must specify product id");
        else {
            this.product_service
                .update_given_product(req.body)
                .then(() => {
                    res.status(201).send({ message: "OK" });
                })
                .catch((err: Error) => {
                    console.log(err);
                    res.status(500).send({
                        message: "There was an error updating the product",
                    });
                });
        }
    };
    delete_product = (req: Request, res: Response) => {
        this.product_service
            .delete_given_product(Number(req.params.id))
            .then(() => {
                res.send({ message: "OK" });
            })
            .catch((err: Error) => {
                console.log(err);
                res.send({
                    message:
                        "There was a problem with deleting product with given id",
                });
            });
    };
    add_product = (req: Request, res: Response) => {
        this.product_service
            .save_product({
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
            .catch((err: Error) => {
                console.log(err);
                res.status(500).send({
                    message: "There was a problem with adding your product",
                });
            });
    };
}
