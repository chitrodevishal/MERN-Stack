import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function GitHub() {
  const { name } = useParams();
  const [Profile, setProfile] = useState(null);

  async function GitHubProfile() {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();
    setProfile(data);
  }
  useEffect(() => {
    GitHubProfile();
  }, [name]);

  return (
    <>
      <h1>This is GitHub Profile Page</h1>
      {/* Here we want to display user data */}
      <div className="container">
        <div className="profile">
          <div className="image">
            <img src={Profile?.avatar_url} alt="Use Profile" />
          </div>
          <div className="username">
            <h1>{Profile?.login}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

// https://api.github.com/users?per_page=${count}
// https://api.github.com/users/taylorotwell
// https://api.github.com/users?since=6000&per_page=20
