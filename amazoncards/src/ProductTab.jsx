import Product from "./Product"
// import './ProductTab.css';
export default function ProductTab() {
  let styles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "25px"
};
    return (
      <div className="ProductTab" style={styles}>
        <Product title="MX LogiTech Master" index={0}/>
        <Product title="Apple Pencil (2nd Gen)" index={1}/>
        <Product title="Zeb Transformer" index={2}/>
        <Product title="Petronix" index={3}/>
        </div>
    )
};