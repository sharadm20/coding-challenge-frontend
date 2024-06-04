// import Image from "next/image";
import Random from "../components/Random";

const carturl='https://fakestoreapi.com/carts/';
const producturl='https://fakestoreapi.com/products/'

async function getProducts(userId: string) {
  const res = await fetch(carturl.concat(userId))
  return res.json()
}

async function getProductsInfo(prodId: string) {
  const res = await fetch(producturl.concat(prodId))
  return res.json()
}
 

 

export default async function Cart() {
   // Initiate both requests in parallel
   const productsData = getProducts('1')
   let products = []
   //const productInfoData = getProductInfo('')
  
   // Wait for the promises to resolve
   const [productO] = await Promise.all([productsData])
   productO.products.map(async p => {
      const info = await getProductsInfo(p.productId)
      const [productsInfo] = await Promise.all([info])
      products.push(productsInfo)
   }
    );
  return (
    <main className="flex flex-col items-center p-14">
        <Random products={products}/>
    </main>
  );
}


