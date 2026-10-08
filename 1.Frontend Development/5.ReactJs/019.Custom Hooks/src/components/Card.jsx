import useFetch from "../hooks/useFetch";

function Card({ count }){
  console.log("First")
  const Profile = useFetch(count)
  console.log("Second")
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