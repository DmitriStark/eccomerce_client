export default function ProductCard(props) {
    return (
      <>
        <h3>{props.product.name}</h3>
        <div className="price">${props.product.price}</div>
      </>
    );
  }
