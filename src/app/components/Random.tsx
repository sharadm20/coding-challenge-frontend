// type Product = {
//     id: number
//     title: string
//     price: number
//     description: string
//     category: string
//     image: string
//     rating: {
//       rate: number
//       count: number
//     }

import Product from "./Product";

//   }


export default async function Random({products}){
    const listItems = products.map(product =>
        <li key = {product.id}>
            <Product items={product}/>
        </li>
      );
    return (
        <>
        <h1 className="flex justify-center text-xl">Cart</h1>
        <ul>{listItems}</ul>
        </>
    );
};
