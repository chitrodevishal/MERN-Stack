import { useEffect, useState } from "react";

function Card({ count }){
  const [Profile, setProfile] = useState([])
  
  async function GithubProfile(){
    const random = Math.floor((Math.random() * 10000)+1)
    const response = await fetch(`https://api.github.com/users?since=${random}&per_page=${count}`)
    const data = await response.json()
    setProfile(data)
    console.log(data)
  }
  useEffect(()=>{
    GithubProfile()
  }, [count])
return (
  <div className="card">
    {
      Profile.map((item)=>{
        return <div className="profile" key={item.id}>
          <div className="first">
            <img src={item.avatar_url} alt="avatar" />
          </div>
          <div className="second">
            <h2>{item.login}</h2>
           <a href={item.html_url} target="_blank" className="link">Visit GitHub Profile</a>
          </div>
        </div>
      })
    }
  </div>
)
}
export default Card