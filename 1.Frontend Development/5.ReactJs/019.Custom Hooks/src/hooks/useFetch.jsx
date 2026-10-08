import { useEffect, useState } from "react";

function useFetch(count) {
  const [Profile, setProfile] = useState([]);
  async function GithubProfile() {
    const random = Math.floor(Math.random() * 10000 + 1);
    const response = await fetch(
      `https://api.github.com/users?since=${random}&per_page=${count}`,
    );
    const data = await response.json();
    setProfile(data);
  }
  useEffect(() => {
    GithubProfile();
  }, [count]);
console.log("Third")
  return Profile;
}

export default useFetch;
