import logo from "url:/utils/logo.svg";
import { Search, User, Heart, Handbag } from "lucide-react";
function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems:"center",
        width:"100%",
        gap: "50px",
        position: "fixed",
        top: "0px",
        backgroundColor: "white",
        zIndex: "1",
        justifyContent:"space-evenly",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      <img
        src={logo}
        style={{
          height: "62px",
          width: "86px",
         
        }}
      ></img>
      <div
        className="option"
        style={{
          display: "flex",
          gap: "45px",
          flexWrap: "wrap",
          fontWeight: "600",
        }}
      >
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Beauty</p>
        <p>Home</p>
        <p>Gen-Z</p>
        <p>Studio</p>
      </div>
      <div style={{ position: "relative" , backgroundColor:"#ffffff79",  alignItems:"center", display:"flex", justifyContent:"center", height:"100%"}} className="search-box">
        <Search size={16} />
        <input
          type="input"
          placeholder="Search for products, brands and more"
          style={{
            margin: "auto",
            width: "300px",
            border: "none",
            marginLeft: "30px",
            fontSize:"15px",
            height:"20px"

          }}
        ></input>
      </div>
      <div className="user" style={{position:"relative", right:"50px", display:"flex", alignItems:"center", justifyContent:"center" ,gap:"30px", height:"100%", fontWeight:"600", padding:"10px"}}>
          <div className="user" >
            <User size={16}/>
            <p style={{margin:"0px",position:"relative", right:"10px", fontSize:"12px"}}>Profile</p>
          </div>
          <div className="user" >
            <Heart size={16}/>
            <p style={{margin:"0px",position:"relative", right:"10px", fontSize:"12px"}}>Wishlist</p>
          </div>
          <div className="user" >
            <Handbag size={16} style={{ transform: "translateX(-8px)" }}/>
            <p style={{margin:"0px",position:"relative", right:"10px", fontSize:"12px"}}>Bag</p>
          </div>

      </div>
    </div>
  );
}
export default Header;