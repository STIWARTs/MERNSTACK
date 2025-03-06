import Product from "./Product.jsx";

function ProductTab() {
    let options =  ["hi-tech", "durable", "waterproof"];
  return (
    <>
      <Product title="phone" price = {3000}/>
      <Product title="laptop" price = {4000} />
    </>
  );
}

export default ProductTab;
