import Price from "./Price"
import "./Product.css"

export default function Product({ title, index }) {
    let oldPrices = ["12,345", "9,234", "10,347", "5,690"];
    let newPrices = ["11,200", "8750", "9450", " 4560"];
    let description = [["description", "description"], ["description", "description"], ["description", "description"], ["description", "description"]];
    
    let descStyles = {
        textIndent:"-80px",
    }
    return (
        <>
            <div className="Product">
                <h4>{title}</h4>
                <p style={descStyles}>{description[index][0]}</p>
                {/* <Price oldPrice={oldPrices[index]} newPrice= {newPrices[index]} /> */}
                 <Price 
                oldPrice={`$${oldPrices[index]}`} 
                newPrice={`$${newPrices[index]}`} 
            />
                
 </div>
        
        </>
    )
}