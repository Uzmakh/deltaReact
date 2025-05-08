export default function Price({oldPrice,newPrice}) {
      let oldStyles = {
            textDecoration: "line-through",
    };
    let newStyles = {
        fontWeight: "bold",
    }
    let styles = {
        backgroundColor: "#FF9B17",
        textAlign:"center",
        height: '30px',
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        paddingTop: "12px"
    }
    return (
  
        <div style={styles}> 
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
         </div>
    )
}