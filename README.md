# CoffeeMug

## Get started

To run application, type `npm install`, `npm run build` and `npm run start` in root directory.
Make sure you have got .env file in dist/services folder (there is an example of .env file in src/services).
API is listening on port 8080 by default.
It's designed to manage list of products (all CRUD operations).

## Description

<b>Product</b> object consists of:

-   ID
-   Name
-   Price
-   UpdateDate

REST API has 5 endpoints:

-   `GET` /products - lists all products
-   `GET` /products/:id - return product with given id
-   `PUT` /products/:id - update product with given id
-   `POST` /products - adds product
-   `DELETE` /products/:id - delete product with given id
