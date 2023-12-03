import products from "../products";
import ProductCard from "./productCard";





export default function Catalog() {
    const cards = products.map((p) => <ProductCard product={p} />); // Added key prop for each card
    console.log(products);
    return <div className="catalog-board">{cards}</div>;
  }

 // <div className="product-card">
    //     <pre>{JSON.stringify(props.product,null,2)}</pre>
    //     </div>

    





