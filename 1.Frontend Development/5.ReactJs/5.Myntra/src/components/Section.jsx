function Section(){
return (
    <div className="section">
        <p onClick={console.log("Filter")}>Filter</p>
        <p onClick={console.log("Sort by Price")}>Sort by Price</p>
        <p onClick={console.log("Sort by Relevance")}>Sort by Relevance</p>
        <p onClick={console.log("Sort by Rating")}>Sort by Rating</p>
        <p onClick={console.log("Sort by Offer")}>Sort by Offer</p>
    </div>
)
}
export default Section;