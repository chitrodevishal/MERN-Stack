import { useState } from 'react';
import logo from "url:../assets/github.svg"
import { Search } from 'lucide-react';
function Header({ setCount }){
    const [Profiles, setProfiles] = useState("")
    function handleSearch() {
        setCount(Number(Profiles));
    }

    return (
        <>
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="title">
                <h1>GitHub Profile Viewer</h1>
            </div>
            <div className="search">
                <input type="number" placeholder="Search here" value={Profiles} onChange={(e)=>{setProfiles(e.target.value)}} />
                <button onClick={handleSearch}>
                <Search size={20} />
            </button>
            </div>
        </div>
        </>
    )
}
export default Header
