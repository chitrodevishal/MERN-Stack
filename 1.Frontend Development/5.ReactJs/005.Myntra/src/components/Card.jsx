function Card(props) {
  return (
    <div className="card" style={{ border: "2px solid black" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRm3TCRkOsTCdtnQ63JAwIulJMA8DPKYUTAOJThWV_pNNwP-6Vwp7vcM7X5SeQgzuQcW9ndWsA0xQ2iigKgpw1mjBvaDTlYAoMB_7sid-btHVkvIQCA19aw"
        alt="T-Shirt Image"
        height="200px"
        width="auto"
        style={{ padding: "10px" }}
      ></img>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "lightblue",
          padding: "10px 0px",
        }}
      >
        <h1>{props.cloth}</h1>
        <h2>Rs. {props.price}</h2>
        <h2>{props.offer}% OFF</h2>
      </div>
    </div>
  );
}
export default Card;